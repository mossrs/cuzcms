package com.moss.cuzcms.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/7 10:14
 */

@Data
public class StuUserScoreDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String stuName;

    private String stuSex;

    private String stuCollege;

    private String stuSpecialty;

    private String stuClassName;

    private String mathScore;

    private String englishScore;

    private String javaScore;

    private String pythonScore;

    private String cppScore;

    private Long userId;
}
