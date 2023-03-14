package com.moss.cuzcms.controller;

import cn.dev33.satoken.annotation.SaCheckPermission;
import cn.dev33.satoken.util.SaResult;
import com.moss.cuzcms.entity.Student;
import com.moss.cuzcms.service.impl.StuTeaServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/6 22:43
 */
@RestController
@RequestMapping("/stuTea")
@Slf4j
public class StuTeaController {

    @Resource
    private StuTeaServiceImpl stuTeaServiceImpl;


    @PutMapping("/updateStudentInfo")
    public SaResult updateStudentInfo(@RequestBody Student student) {
        return SaResult.data(stuTeaServiceImpl.updateStudent(student));
    }
}
