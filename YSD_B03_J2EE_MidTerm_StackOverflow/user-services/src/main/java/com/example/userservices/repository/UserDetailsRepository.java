package com.example.userservices.repository;

import com.example.userservices.entity.UserInfo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserDetailsRepository extends JpaRepository<UserInfo, Long> {
    Optional<UserInfo> findByUserId(long userId);
}
