package com.moss.cuzcms.controller;

import cn.dev33.satoken.util.SaResult;
import com.moss.cuzcms.dto.ResLoginUserInfoDTO;
import com.moss.cuzcms.service.impl.UserServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;


/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/1 10:18
 */
@RestController
@Slf4j
@RequestMapping("/user")
public class UserController {

    @Resource
    private UserServiceImpl userServiceImpl;

    @PostMapping("/login")
    public SaResult login(String username, String password) {
        ResLoginUserInfoDTO resLoginUserInfoDTO = userServiceImpl.login(username, password);
        return SaResult.data(resLoginUserInfoDTO);
    }

    @GetMapping("/getAllUser")
    public SaResult getAllUser() {
        return SaResult.data(userServiceImpl.getAllUser());
    }
}
