package com.moss.cuzcms.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.moss.cuzcms.entity.Student;
import com.moss.cuzcms.mapper.StudentMapper;
import com.moss.cuzcms.service.StuTeaService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/6 22:41
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class StuTeaServiceImpl implements StuTeaService {

    @Resource
    private StudentMapper studentMapper;

    @Override
    public Boolean updateStudent(Student student) {
        QueryWrapper<Student> studentQueryWrapper = new QueryWrapper<Student>().eq("user_id", student.getUserId());
        return studentMapper.update(student, studentQueryWrapper) > 0;
    }


}
