package com.moss.cuzcms.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.gitee.sunchenbin.mybatis.actable.annotation.Column;
import com.gitee.sunchenbin.mybatis.actable.annotation.Table;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/2 8:36
 */
@Data
@Table(name = "t_role_permission", comment = "角色权限表")
public class RolePermission implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(isKey = true, isAutoIncrement = true, comment = "主键id")
    private Long id;

    @Column(comment = "角色id", isNull = false)
    private Long roleId;

    @Column(comment = "权限id", isNull = false)
    private Long permissionId;

    @TableLogic
    @Column(comment = "是否删除", isNull = false, defaultValue = "false")
    private Boolean deleted;

    @Column(comment = "创建时间")
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;

    @Column(comment = "更新时间")
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;

}
