package ve.soportecrj.pricelistviewer.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "crj_view")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class View {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    String title;

    boolean active;
    boolean enabled;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name = "parent")
    @JsonBackReference
    View parentView;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "view", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    List<ViewAttribute> attributes;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "view", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    List<ViewElement> elements;
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "parentView", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    List<View> childViews;
}
