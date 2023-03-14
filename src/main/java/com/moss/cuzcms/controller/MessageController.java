package com.moss.cuzcms.controller;

import cn.dev33.satoken.util.SaResult;
import com.moss.cuzcms.entity.Message;
import com.moss.cuzcms.service.impl.MessageServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/9 13:22
 */
@RestController
@RequestMapping("/message")
@Slf4j
public class MessageController {

    @Resource
    private MessageServiceImpl messageServiceImpl;

    @PostMapping("/saveMessage")
    public SaResult saveMessage(@RequestBody Message message) {
        return SaResult.data(messageServiceImpl.saveMessage(message));
    }

    @GetMapping("/getMessage")
    public SaResult getMessage(String name) {
        return SaResult.data(messageServiceImpl.getMessage(name));
    }

    @PutMapping("/updateMessage/{id}")
    public SaResult updateMessage(@PathVariable Long id) {
        return SaResult.data(messageServiceImpl.updateMessage(id));
    }
}
