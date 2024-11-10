package ve.soportecrj.pricelistviewer.services;

import ve.soportecrj.pricelistviewer.models.View;

import java.util.Collection;

public interface ViewService {
    View getViewById(Long id);

    Collection<View> getAllViews();

    View saveView(View view);

    View updateView(View view, Long id);

    View deleteView(Long id);
}
