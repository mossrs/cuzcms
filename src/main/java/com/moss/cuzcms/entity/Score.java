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
 * @date 2022/12/6 11:39
 */
@Data
@Table(name = "t_score", comment = "成绩表")
public class Score implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(isKey = true, isAutoIncrement = true, comment = "主键id")
    private Long id;

    @Column(comment = "数学成绩")
    private String mathScore;

    @Column(comment = "英语成绩")
    private String englishScore;

    @Column(comment = "java成绩")
    private String javaScore;

    @Column(comment = "python成绩")
    private String pythonScore;

    @Column(comment = "c成绩")
    private String cppScore;

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
