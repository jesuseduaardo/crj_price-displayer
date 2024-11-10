package ve.soportecrj.pricelistviewer.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ve.soportecrj.pricelistviewer.exceptions.ProductNotFoundException;
import ve.soportecrj.pricelistviewer.exceptions.ViewNotFoundException;
import ve.soportecrj.pricelistviewer.models.View;
import ve.soportecrj.pricelistviewer.services.ViewService;

import java.util.Collection;
import java.util.Objects;

@RestController
@RequestMapping("/views")
@AllArgsConstructor
public class ViewController {

    private final ViewService viewService;

    @GetMapping("/")
    public ResponseEntity<Collection<View>> getViews() {
        Collection<View> productCollection = viewService.getAllViews();
        return ResponseEntity.status(HttpStatus.OK).body(productCollection);
    }

    @GetMapping("/{viewId}")
    public ResponseEntity<View> getProduct(@PathVariable Long viewId) {
        View view = viewService.getViewById(viewId);
        return ResponseEntity.status(HttpStatus.OK).body(view);
    }

    @PostMapping("/")
    public ResponseEntity<View> saveProduct(@RequestBody View newView) {
        View view = viewService.saveView(newView);
        if (null == view) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(view);
    }

    @PutMapping(value = "/{viewId}")
    public ResponseEntity<View> updateProduct(@RequestBody View newView, @PathVariable Long viewId) {
        if (Objects.nonNull(viewId)) {
            View view = viewService.updateView(newView, viewId);
            if (null == view) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(view);
        }
        throw new ViewNotFoundException("No se encontro el cartel");
    }

    @DeleteMapping("/{viewId}")
    public ResponseEntity<?> deleteView(@PathVariable Long viewId) {
        if (Objects.nonNull(viewId)) {
            View update = viewService.deleteView(viewId);
            if (null == update) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        throw new ProductNotFoundException("No se encontro el cartel");
    }

}
