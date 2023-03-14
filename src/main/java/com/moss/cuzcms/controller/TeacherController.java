package com.moss.cuzcms.controller;

import cn.dev33.satoken.util.SaResult;
import com.moss.cuzcms.entity.Attendance;
import com.moss.cuzcms.entity.Score;
import com.moss.cuzcms.service.impl.TeacherServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/6 12:36
 */
@RestController
@RequestMapping("/teacher")
@Slf4j
public class TeacherController {

    @Resource
    private TeacherServiceImpl teacherServiceImpl;

    @GetMapping("/getScorePageList/{page}/{size}")
    public SaResult getScorePageList(@PathVariable Long page, @PathVariable Long size) {
        return SaResult.data(teacherServiceImpl.getScorePageList(page, size));
    }

    @PutMapping("/updateScore")
    public SaResult updateScore(@RequestBody Score score) {
        return SaResult.data(teacherServiceImpl.updateScore(score));
    }

    @GetMapping("/getAttendancePageList/{page}/{size}")
    public SaResult getAttendancePageList(@PathVariable Long page, @PathVariable Long size) {
        return SaResult.data(teacherServiceImpl.getAttendancePageList(page, size));
    }

    @PutMapping("/updateAttendance")
    public SaResult updateAttendance(@RequestBody Attendance attendance) {
        return SaResult.data(teacherServiceImpl.updateAttendance(attendance));
    }

}
