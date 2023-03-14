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
 * @date 2022/12/1 16:54
 */
@Data
@Table(name = "t_user", comment = "用户表")
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    @Column(isKey = true, isAutoIncrement = true, comment = "主键id")
    private Long id;

    @Column(comment = "学号、工号", isNull = false)
    private String username;

    @Column(comment = "密码", isNull = false, length = 512)
    @TableField(select = false)
    private String password;

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
