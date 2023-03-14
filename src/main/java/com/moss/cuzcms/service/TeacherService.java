package com.moss.cuzcms.service;

import com.moss.cuzcms.dto.MyPageDTO;
import com.moss.cuzcms.dto.StuUserAttendanceDTO;
import com.moss.cuzcms.dto.StuUserScoreDTO;
import com.moss.cuzcms.entity.Attendance;
import com.moss.cuzcms.entity.Score;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/6 12:35
 */
public interface TeacherService {


    /**
     * 返回分页所有学生用户成绩
     *
     * @param page 页码
     * @param size 每页数量
     * @return 是否成功
     */
    MyPageDTO<StuUserScoreDTO> getScorePageList(Long page, Long size);

    /**
     * 修改学生用户成绩
     *
     * @param score 成绩
     * @return 是否成功
     */
    boolean updateScore(Score score);

    /**
     * 返回分页所有学生用户考勤
     *
     * @param page 页码
     * @param size 每页数量
     * @return 是否成功
     */
    MyPageDTO<StuUserAttendanceDTO> getAttendancePageList(Long page, Long size);

    /**
     * 修改学生用户考勤
     *
     * @param attendance 考勤
     * @return 是否成功
     */
    boolean updateAttendance(Attendance attendance);

}
