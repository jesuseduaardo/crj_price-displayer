package ve.soportecrj.pricelistviewer.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "crj_sysconf_attr")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class SysConfigAttribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonIgnore
    Long id;
    String attribute;
    String value;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "config_id")
    @JsonBackReference
    SysConfig sysConfig;
}
