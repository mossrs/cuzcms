package com.moss.cuzcms.controller;

import cn.dev33.satoken.util.SaResult;
import com.moss.cuzcms.entity.Dormitory;
import com.moss.cuzcms.service.impl.AnutieServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/8 14:51
 */
@RestController
@Slf4j
@RequestMapping("/anutie")
public class AnutieController {

    @Resource
    private AnutieServiceImpl anutieServiceImpl;

    @GetMapping("/getAnutieDormitoryPageList/{page}/{size}")
    public SaResult getAnutieDormitoryPageList(@PathVariable Long page, @PathVariable Long size) {
        return SaResult.data(anutieServiceImpl.getAnutieDormitoryPageList(page, size));
    }

    @PutMapping("/updateAnutieDormitory")
    public SaResult updateAnutieDormitory(@RequestBody Dormitory dormitory) {
        return SaResult.data(anutieServiceImpl.updateAnutieDormitory(dormitory));
    }

}
