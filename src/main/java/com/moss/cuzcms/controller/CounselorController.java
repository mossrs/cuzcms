package com.moss.cuzcms.controller;

import cn.dev33.satoken.annotation.SaCheckPermission;
import cn.dev33.satoken.util.SaResult;
import com.moss.cuzcms.service.impl.CounselorServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/7 15:47
 */
@RestController
@Slf4j
@RequestMapping("/counselor")
public class CounselorController {

    @Resource
    private CounselorServiceImpl counselorServiceImpl;

    @GetMapping("/getStudentInfoPageList/{page}/{size}")
    public SaResult getStudentPageList(@PathVariable Long page, @PathVariable Long size) {
        return SaResult.data(counselorServiceImpl.getStudentPageList(page, size));
    }
}
