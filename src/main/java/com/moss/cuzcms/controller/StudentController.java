package com.moss.cuzcms.controller;

import cn.dev33.satoken.util.SaResult;
import com.moss.cuzcms.service.impl.StudentServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/5 15:47
 */
@RestController
@RequestMapping("/student")
@Slf4j
public class StudentController {

    @Resource
    private StudentServiceImpl studentServiceImpl;

    @GetMapping("/getStudentInfo/{userId}")
    public SaResult getStudentInfo(@PathVariable Long userId) {
        return SaResult.data(studentServiceImpl.getStudent(userId));
    }

    @GetMapping("/getStudentScore/{userId}")
    public SaResult getStudentScore(@PathVariable Long userId) {
        return SaResult.data(studentServiceImpl.getScore(userId));
    }

    @GetMapping("/getStudentDormitory/{userId}")
    public SaResult getStudentDormitory(@PathVariable Long userId) {
        return SaResult.data(studentServiceImpl.getDormitory(userId));
    }

    @GetMapping("/getStudentRoommateDormitory")
    public SaResult getStudentRoommateDormitory(Integer dormitoryNum, Integer roomNum, Long userId) {
        return SaResult.data(studentServiceImpl.getRoommateDormitory(dormitoryNum, roomNum, userId));
    }

    @GetMapping("/getStudentAttendanceList/{userId}")
    public SaResult getStudentAttendance(@PathVariable Long userId) {
        return SaResult.data(studentServiceImpl.getAttendance(userId));
    }

    @GetMapping("/getStudentScholarshipList/{userId}")
    public SaResult getStudentScholarshipList(@PathVariable Long userId) {
        return SaResult.data(studentServiceImpl.getAttendance(userId));
    }
}
