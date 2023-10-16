package com.example.userservices.services;

import com.example.userservices.entity.UserInfo;

public interface IUserDetailsService {
    public void createUserDetails(UserInfo userInfo, long userId);
    public void updateUserDetails(UserInfo userInfo, long userId);
    public UserInfo getUserInfoById(long userId);
}
