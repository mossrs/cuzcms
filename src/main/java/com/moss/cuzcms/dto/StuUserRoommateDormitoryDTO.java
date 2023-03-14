package com.moss.cuzcms.dto;

import lombok.Data;

import java.io.Serializable;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/7 16:36
 */
@Data
public class StuUserRoommateDormitoryDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private String roommateName;

    private String roommateSex;

    private String roommateCollege;

    private String roommateSpecialty;

    private String roommateClassName;

    private Integer roommateBedNum;

}
