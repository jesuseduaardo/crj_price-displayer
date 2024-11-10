package ve.soportecrj.pricelistviewer.services.impl;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import ve.soportecrj.pricelistviewer.exceptions.ProductNotFoundException;
import ve.soportecrj.pricelistviewer.models.Product;
import ve.soportecrj.pricelistviewer.repositories.ProductsRepository;
import ve.soportecrj.pricelistviewer.services.ProductService;

import java.util.Collection;

@Service
@AllArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductsRepository productsRepository;

    @Override
    public Product get(Long productId) throws ProductNotFoundException {
        boolean isEnabled = true;
        return productsRepository
                .findByIdAndEnabled(productId, isEnabled)
                .orElseThrow(() -> new ProductNotFoundException(
                        "Producto con id " + productId + " no encontrado"
                ));
    }

    @Override
    public Collection<Product> getAll() {
        boolean enabled = true;
        return productsRepository.findAllByEnabled(enabled);
    }

    @Override
    public Product update(Product product, Long productId) {
        boolean isEnabled = true;
        Product oldProduct = productsRepository
                .findByIdAndEnabled(productId, isEnabled)
                .orElseThrow(() -> new ProductNotFoundException(
                        "Producto con id " + productId + " no encontrado"
                ));
        product.setId(oldProduct.getId());
        return productsRepository.save(product);
    }


    @Override
    public Product save(Product product) {
        return productsRepository.save(product);
    }

    @Override
    public void delete(Long productId) {
        boolean isEnabled = true;
        Product oldProduct = productsRepository
                .findByIdAndEnabled(productId, isEnabled)
                .orElseThrow(() -> new ProductNotFoundException(
                        "Producto con id " + productId + " no encontrado"
                ));
        oldProduct.setEnabled(false);
        productsRepository.save(oldProduct);
    }
}
