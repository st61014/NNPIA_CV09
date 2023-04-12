package cz.upce.fe.cv02.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.util.Collections;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
public class Role {
    @Id
    private Long id;

    @Column
    private String name;

    @ManyToMany
    @JoinTable(
            name = "app_user_role",
            joinColumns = @JoinColumn(name = "role_id"),
            inverseJoinColumns = @JoinColumn(name = "app_user_id")
    )
    @ToString.Exclude // It will prevent to infinity loop in Lombok ToString generation because field from each class points to themselves
    @JsonIgnore
    private List<AppUser> users = Collections.emptyList();
}
