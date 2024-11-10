package ve.soportecrj.pricelistviewer.services;

import ve.soportecrj.pricelistviewer.exceptions.ProductNotFoundException;
import ve.soportecrj.pricelistviewer.models.Product;

import java.util.Collection;

public interface ProductService {
    Product get(Long productId) throws ProductNotFoundException;

    Collection<Product> getAll();

    Product update(Product product, Long productId);


    Product save(Product product);

    void delete(Long productId);
}
