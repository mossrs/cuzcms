package com.moss.cuzcms.service;

import com.moss.cuzcms.dto.MyPageDTO;
import com.moss.cuzcms.entity.Student;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/7 15:47
 */
public interface CounselorService {
    /**
     * 返回分页所有学生用户信息
     *
     * @param page 页码
     * @param size 每页数量
     * @return 是否成功
     */
    MyPageDTO<Student> getStudentPageList(Long page, Long size);
}
