package ve.soportecrj.pricelistviewer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ve.soportecrj.pricelistviewer.models.Product;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface ProductsRepository extends JpaRepository<Product, Long> {
    Optional<Product> findByIdAndEnabled(Long productId, boolean enable);
    Collection<Product> findAllByEnabled(boolean enable);
}
