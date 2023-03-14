package com.moss.cuzcms.service;


import com.moss.cuzcms.dto.ResLoginUserInfoDTO;
import com.moss.cuzcms.entity.User;

import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/1 10:18
 */
public interface UserService {

    /**
     * 用户登录
     *
     * @param username 用户名
     * @param password 密码
     * @return 用户信息
     */
    ResLoginUserInfoDTO login(String username, String password);

    /**
     * 返回所有用户
     *
     * @return 用户列表
     */
    List<User> getAllUser();
}
