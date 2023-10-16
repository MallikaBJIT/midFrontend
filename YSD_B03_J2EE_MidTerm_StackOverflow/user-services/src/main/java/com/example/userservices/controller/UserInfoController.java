package com.example.userservices.controller;

import com.example.userservices.entity.UserInfo;
import com.example.userservices.response.ResponseHandler;
import com.example.userservices.services.IAuthenticationService;
import com.example.userservices.services.IUserDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/userInfo")
@AllArgsConstructor
public class UserInfoController {

    private final IUserDetailsService userDetailsService;
    private final IAuthenticationService authenticationService;


    @PostMapping("/create")
    public ResponseEntity<Object> createUserInfo(@RequestBody UserInfo userInfo) {
        long userId = authenticationService.getAuthenticatedUser();
        userDetailsService.createUserDetails(userInfo, userId);

        return ResponseHandler.generateResponse("Create UserInfo Successfully", HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Object> updateUserInfo(@RequestBody UserInfo userInfo) {
        long userId = authenticationService.getAuthenticatedUser();
        userDetailsService.updateUserDetails(userInfo, userId);

        return ResponseHandler.generateResponse("Update UserInfo Successfully", HttpStatus.OK);
    }

    @GetMapping("/getById")
    public ResponseEntity<Object> getUserById(){
        long userId = authenticationService.getAuthenticatedUser();
        UserInfo response = userDetailsService.getUserInfoById(userId);

        return ResponseHandler.generateResponse("Fetch Data Successfully", HttpStatus.OK, response);
    }
}
