package com.moss.cuzcms.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/8 14:03
 */
@Data
public class AnutieStuUserDormitoryDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String dormitoryName;

    private String dormitorySex;

    private String dormitoryCollege;

    private String dormitorySpecialty;

    private String dormitoryClassName;

    private Integer dormitoryNum;

    private Integer dormitoryRoomNum;

    private Integer dormitoryBedNum;

    private Long userId;

}
