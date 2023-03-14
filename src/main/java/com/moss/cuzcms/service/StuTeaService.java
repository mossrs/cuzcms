package com.moss.cuzcms.service;

import com.moss.cuzcms.entity.Student;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/6 22:41
 */
public interface StuTeaService {

    /**
     * 根据用户id更新学生用户信息
     *
     * @param student 学生信息
     * @return 是否更新成功
     */
    Boolean updateStudent(Student student);
}
