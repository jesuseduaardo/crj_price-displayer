package ve.soportecrj.pricelistviewer.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ve.soportecrj.pricelistviewer.models.View;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface ViewsRepository extends JpaRepository<View, Long> {
    @Query(value = "SELECT id, title, parent, active, enabled FROM crj.crj_view WHERE parent = 0 AND enabled = 1",
            nativeQuery = true)
    Collection<View> findAllViews();

    Optional<View> findByIdAndEnabled(Long viewId, boolean enable);

}
