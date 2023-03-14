package com.moss.cuzcms.service;

import com.moss.cuzcms.entity.Message;

import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/9 13:22
 */
public interface MessageService {

    /**
     * 保存一条消息
     *
     * @param message 消息
     * @return 是否成功
     */
    boolean saveMessage(Message message);


    /**
     * 返回用户消息列表
     *
     * @param name 用户姓名
     * @return 是否成功
     */
    List<Message> getMessage(String name);

    /**
     * 更新消息状态
     *
     * @param id 消息id
     * @return 是否成功
     */
    boolean updateMessage(Long id);

}
