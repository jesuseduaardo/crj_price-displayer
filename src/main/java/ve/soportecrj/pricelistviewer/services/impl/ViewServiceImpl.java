package ve.soportecrj.pricelistviewer.services.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ve.soportecrj.pricelistviewer.exceptions.ViewNotFoundException;
import ve.soportecrj.pricelistviewer.models.View;
import ve.soportecrj.pricelistviewer.repositories.ViewsRepository;
import ve.soportecrj.pricelistviewer.services.ViewService;

import java.util.Collection;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ViewServiceImpl implements ViewService {

    private final ViewsRepository viewsRepository;

    @Override
    public View getViewById(Long id) {
        boolean enabled = true;
        Optional<View> optionalView = viewsRepository.findByIdAndEnabled(id, enabled);
        return optionalView.orElseThrow(() -> new ViewNotFoundException("No se encontro el cartel"));
    }

    @Override
    public Collection<View> getAllViews() {
        return viewsRepository.findAllViews();
    }

    @Override
    public View saveView(View view) {
        return viewsRepository.save(view);
    }

    @Override
    public View updateView(View view, Long id) {
        Optional<View> optionalView = viewsRepository.findById(id);
        View oldView = optionalView
                .orElseThrow(() -> new ViewNotFoundException("No se encontro el cartel"));
        view.setId(oldView.getId());
        return viewsRepository.save(view);
    }

    @Override
    public View deleteView(Long id) {
        Optional<View> optionalView = viewsRepository.findById(id);
        View view = optionalView
                .orElseThrow(() -> new ViewNotFoundException("No se encontro el cartel"));
        view.setEnabled(false);
        return viewsRepository.save(view);
    }
}
