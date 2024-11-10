package ve.soportecrj.pricelistviewer.models;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "crj_sysconf")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SysConfig {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String name;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "sysConfig", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    List<SysConfigAttribute> attributes;
}
