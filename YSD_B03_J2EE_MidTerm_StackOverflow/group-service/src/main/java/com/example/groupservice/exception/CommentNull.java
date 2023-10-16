package com.example.groupservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class CommentNull extends RuntimeException{
    private String message;
    public CommentNull(String message1) {
        super(message1);
    }
}
