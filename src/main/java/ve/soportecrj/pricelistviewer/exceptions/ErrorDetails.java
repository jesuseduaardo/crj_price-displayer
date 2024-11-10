package ve.soportecrj.pricelistviewer.exceptions;

import lombok.Builder;
import lombok.Getter;

import java.util.Date;

@Builder
@Getter
public class ErrorDetails {
    private int statusCode;
    private Date timestamp;
    private String message;
    private String details;
}
