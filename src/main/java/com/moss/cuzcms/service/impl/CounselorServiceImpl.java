package com.moss.cuzcms.service.impl;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.moss.cuzcms.dto.MyPageDTO;
import com.moss.cuzcms.entity.Student;
import com.moss.cuzcms.mapper.StudentMapper;
import com.moss.cuzcms.service.CounselorService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/7 15:48
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class CounselorServiceImpl implements CounselorService {

    @Resource
    private StudentMapper studentMapper;

    @Override
    public MyPageDTO<Student> getStudentPageList(Long page, Long size) {
        Page<Student> studentPage = studentMapper.selectPage(new Page<>(page, size), null);
        return new MyPageDTO<>(studentPage);
    }
}
