package com.moss.cuzcms.common;

import cn.dev33.satoken.stp.StpInterface;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.moss.cuzcms.entity.RolePermission;
import com.moss.cuzcms.entity.UserRole;
import com.moss.cuzcms.mapper.PermissionMapper;
import com.moss.cuzcms.mapper.RoleMapper;
import com.moss.cuzcms.mapper.RolePermissionMapper;
import com.moss.cuzcms.mapper.UserRoleMapper;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/2 9:19
 */
@Component
@Transactional(rollbackFor = Exception.class)
public class StpInterfaceImpl implements StpInterface {

    @Resource
    private RolePermissionMapper rolePermissionMapper;
    @Resource
    private UserRoleMapper userRoleMapper;
    @Resource
    private PermissionMapper permissionMapper;
    @Resource
    private RoleMapper roleMapper;

    @Override
    public List<String> getPermissionList(Object loginId, String s) {
        ArrayList<String> permissionNameList = new ArrayList<>();
        //获取用户角色
        QueryWrapper<UserRole> userRoleQueryWrapper = new QueryWrapper<>();
        userRoleQueryWrapper.eq("user_id", loginId);
        List<UserRole> userRoleList = userRoleMapper.selectList(userRoleQueryWrapper);
        //获取角色权限
        for (UserRole userRole : userRoleList) {
            QueryWrapper<RolePermission> rolePermissionQueryWrapper = new QueryWrapper<>();
            rolePermissionQueryWrapper.eq("role_id", userRole.getRoleId());
            List<RolePermission> rolePermissionList = rolePermissionMapper.selectList(rolePermissionQueryWrapper);
            //获取权限名称
            for (RolePermission rolePermission : rolePermissionList) {
                permissionNameList.add(permissionMapper.selectById(rolePermission.getPermissionId()).getPermissionName());
            }
        }
        return permissionNameList;
    }

    @Override
    public List<String> getRoleList(Object loginId, String s) {
        ArrayList<String> roleNameList = new ArrayList<>();
        QueryWrapper<UserRole> qw = new QueryWrapper<>();
        qw.eq("user_id", loginId);
        List<UserRole> userRoles = userRoleMapper.selectList(qw);
        for (UserRole userRole : userRoles) {
            roleNameList.add(roleMapper.selectById(userRole.getRoleId()).getRoleName());
        }
        return roleNameList;
    }
}
