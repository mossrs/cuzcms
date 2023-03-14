package com.moss.cuzcms.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.moss.cuzcms.dto.ResLoginUserInfoDTO;
import com.moss.cuzcms.entity.User;
import com.moss.cuzcms.mapper.UserMapper;
import com.moss.cuzcms.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/4 16:03
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public ResLoginUserInfoDTO login(String username, String password) {
        QueryWrapper<User> userQueryWrapper = new QueryWrapper<>();
        userQueryWrapper.eq("username", username);
        userQueryWrapper.eq("password", password);
        User user = userMapper.selectOne(userQueryWrapper);
        if (user == null) {
            throw new RuntimeException("用户名或密码错误");
        }
        StpUtil.login(user.getId());
        ResLoginUserInfoDTO userDTO = new ResLoginUserInfoDTO();
        userDTO.setUserId(user.getId());
        userDTO.setRoles(StpUtil.getRoleList());
        userDTO.setPermissions(StpUtil.getPermissionList());
        return userDTO;
    }

    @Override
    public List<User> getAllUser() {
        return userMapper.selectList(null);
    }

}
