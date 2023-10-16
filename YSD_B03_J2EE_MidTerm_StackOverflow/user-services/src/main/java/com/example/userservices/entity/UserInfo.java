package com.example.userservices.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long userId;
    private String name;
    private long mobile;

    @OneToOne(cascade = CascadeType.ALL)
    private Personal personal;
}
