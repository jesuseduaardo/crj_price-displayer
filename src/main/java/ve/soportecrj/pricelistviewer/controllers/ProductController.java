package ve.soportecrj.pricelistviewer.controllers;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ve.soportecrj.pricelistviewer.exceptions.ProductNotFoundException;
import ve.soportecrj.pricelistviewer.exceptions.ViewNotFoundException;
import ve.soportecrj.pricelistviewer.models.Product;
import ve.soportecrj.pricelistviewer.models.View;
import ve.soportecrj.pricelistviewer.services.ProductService;

import java.util.Collection;
import java.util.Objects;

@RestController
@RequestMapping("/products")
@AllArgsConstructor
public class ProductController {

    private ProductService productService;

    @GetMapping("/")
    public ResponseEntity<Collection<Product>> getProducts() {
        Collection<Product> productCollection = productService.getAll();
        return ResponseEntity.status(HttpStatus.OK).body(productCollection);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<Product> getProduct(@PathVariable Long productId) {
        Product product = productService.get(productId);
        return ResponseEntity.status(HttpStatus.OK).body(product);
    }

    @PostMapping("/")
    public ResponseEntity<Product> saveProduct(@RequestBody Product newProduct) {
        Product product = productService.save(newProduct);
        if (null == product) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
        return ResponseEntity.status(HttpStatus.CREATED).body(product);
    }

    @PutMapping(value = "/{productId}")
    public ResponseEntity<Product> updateProduct(@RequestBody Product newProduct, @PathVariable Long productId) {
        if (Objects.nonNull(productId)) {
            Product product = productService.update(newProduct, productId);
            if (null == product) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
            }
            return ResponseEntity.status(HttpStatus.CREATED).body(product);
        }
        throw new ProductNotFoundException("No se encontro el producto");
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long productId) {
        if (Objects.nonNull(productId)) {
            productService.delete(productId);
            return ResponseEntity.status(HttpStatus.OK).build();
        }
        throw new ProductNotFoundException("No se encontro el producto");
    }

}
