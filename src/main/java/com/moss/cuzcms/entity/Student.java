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
 */
@Data
@Table(name = "t_student", comment = "学生表")
public class Student implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(isKey = true, isAutoIncrement = true, comment = "主键id")
    private Long id;

    @Column(comment = "姓名")
    private String name;

    @Column(comment = "性别")
    private String sex;

    @Column(comment = "年龄")
    private Integer age;

    @Column(comment = "专业")
    private String specialty;

    @Column(comment = "学院")
    private String college;

    @Column(comment = "班级")
    private String className;

    @Column(comment = "用户id")
    private Long userId;

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
