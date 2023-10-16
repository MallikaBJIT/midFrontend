package com.example.userservices.services.impl;

import com.example.userservices.entity.UserInfo;
import com.example.userservices.exception.CustomeException;
import com.example.userservices.repository.UserDetailsRepository;
import com.example.userservices.services.IUserDetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserDetailsService implements IUserDetailsService {
    private final UserDetailsRepository userDetailsRepository;
    public void createUserDetails(UserInfo userInfo, long userId) {
        // Check if the user already created profile or not
        Optional<UserInfo> existingUser = userDetailsRepository.findByUserId(userId);
        if (existingUser.isPresent()) {
            throw new CustomeException(HttpStatus.BAD_REQUEST,
                    "You already create your profile. You can only update your data. You can't create multiple profiles");
        }

        userInfo.setUserId(userId);
        userDetailsRepository.save(userInfo);
    }


    public void updateUserDetails(UserInfo userInfo, long userId) {
        UserInfo existingUser = userDetailsRepository.findByUserId(userId).orElseThrow(() -> new CustomeException(HttpStatus.BAD_REQUEST,
                "You can't update without create User profile and health information"));
        userInfo.setUserId(userId);
        userInfo.setId(existingUser.getId());
        userInfo.getPersonal().setId(existingUser.getPersonal().getId());
        userInfo.getPersonal().getAdditional().setId(existingUser.getPersonal().getAdditional().getId());

        userDetailsRepository.save(userInfo);
    }

    public UserInfo getUserInfoById(long userId){
        return userDetailsRepository.findByUserId(userId).orElseThrow(() -> new CustomeException(HttpStatus.BAD_REQUEST,
                "You didn't create you info"));
    }
}
