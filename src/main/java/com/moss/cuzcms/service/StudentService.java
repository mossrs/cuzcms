package com.moss.cuzcms.service;

import com.moss.cuzcms.dto.StuUserAttendanceDTO;
import com.moss.cuzcms.dto.StuUserRoommateDormitoryDTO;
import com.moss.cuzcms.entity.*;

import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/5 15:47
 */
public interface StudentService {

    /**
     * 返回学生用户获取学生信息
     *
     * @param userId 用户id
     * @return 学生信息
     */
    Student getStudent(Long userId);


    /**
     * 返回学生用户成绩
     *
     * @param userId 用户id
     * @return 返回学生用户成绩
     */
    Score getScore(Long userId);


    /**
     * 返回学生用户寝室信息
     *
     * @param userId 用户id
     * @return 返回学生用户寝室信息
     */
    Dormitory getDormitory(Long userId);


    /**
     * 返回学生用户室友寝室信息
     *
     * @param dormitoryNum 楼号
     * @param roomNum      房间号
     * @param userId       用户id
     * @return 返回学生用户室友寝室信息
     */
    List<StuUserRoommateDormitoryDTO> getRoommateDormitory(Integer dormitoryNum,
                                                           Integer roomNum,
                                                           Long userId);

    /**
     * 返回学生用户的考勤信息
     *
     * @param userId 用户id
     * @return 返回学生用户的考勤信息
     */
    List<Attendance> getAttendance(Long userId);


    /**
     * 返回学生用户的奖学金信息
     *
     * @param userId 用户id
     * @return 返回学生用户的奖学金信息
     */
    List<Scholarship> getScholarship(Long userId);
}
