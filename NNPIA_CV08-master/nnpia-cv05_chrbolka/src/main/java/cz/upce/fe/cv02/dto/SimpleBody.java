package cz.upce.fe.cv02.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
// Or @Data annotation for all above
public class SimpleBody {
    private String message;
}
