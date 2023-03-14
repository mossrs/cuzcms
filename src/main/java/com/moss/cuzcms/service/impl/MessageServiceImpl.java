package com.moss.cuzcms.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.moss.cuzcms.entity.Message;
import com.moss.cuzcms.mapper.MessageMapper;
import com.moss.cuzcms.service.MessageService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/9 13:22
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class MessageServiceImpl implements MessageService {

    @Resource
    private MessageMapper messageMapper;

    @Override
    public boolean saveMessage(Message message) {
        return messageMapper.insert(message) > 0;
    }

    @Override
    @SuppressWarnings("all")
    public List<Message> getMessage(String name) {
        QueryWrapper<Message> messageQueryWrapper = new QueryWrapper<>();
        messageQueryWrapper.eq("send_name", name).or().eq("receive_name", name);
        return messageMapper.selectList(messageQueryWrapper);
    }

    @Override
    public boolean updateMessage(Long id) {
        Message message = messageMapper.selectById(id);
        message.setState(true);
        return messageMapper.updateById(message) > 0;
    }
}
