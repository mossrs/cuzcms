package com.moss.cuzcms.dto;

import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/9 11:01
 */
@Data
public class StuUserAttendanceDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String stuName;

    private String stuSex;

    private String stuCollege;

    private String stuSpecialty;

    private String stuClassName;

    private String subject;

    private Boolean state;

    private Long userId;

    private LocalDateTime updateTime;

}
