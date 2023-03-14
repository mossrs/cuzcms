package com.moss.cuzcms.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.moss.cuzcms.dto.StuUserRoommateDormitoryDTO;
import com.moss.cuzcms.entity.*;
import com.moss.cuzcms.mapper.*;
import com.moss.cuzcms.service.StudentService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/5 16:08
 */
@Transactional(rollbackFor = Exception.class)
@Service
public class StudentServiceImpl implements StudentService {

    @Resource
    private StudentMapper studentMapper;
    @Resource
    private ScoreMapper scoreMapper;
    @Resource
    private DormitoryMapper dormitoryMapper;
    @Resource
    private AttendanceMapper attendanceMapper;
    @Resource
    private ScholarshipMapper scholarshipMapper;

    @Override
    public Student getStudent(Long userId) {
        QueryWrapper<Student> studentQueryWrapper = new QueryWrapper<>();
        studentQueryWrapper.eq("user_id", userId);
        return studentMapper.selectOne(studentQueryWrapper);
    }

    @Override
    public Score getScore(Long userId) {
        QueryWrapper<Score> scoreQueryWrapper = new QueryWrapper<>();
        scoreQueryWrapper.eq("user_id", userId);
        return scoreMapper.selectOne(scoreQueryWrapper);
    }

    @Override
    public Dormitory getDormitory(Long userId) {
        QueryWrapper<Dormitory> dormitoryQueryWrapper = new QueryWrapper<>();
        dormitoryQueryWrapper.eq("user_id", userId);
        return dormitoryMapper.selectOne(dormitoryQueryWrapper);
    }

    @Override
    @SuppressWarnings("all")
    public List<StuUserRoommateDormitoryDTO> getRoommateDormitory(Integer dormitoryNum,
                                                                  Integer roomNum,
                                                                  Long userId) {
        ArrayList<StuUserRoommateDormitoryDTO> stuUserDormitoryDTOS = new ArrayList<>();
        QueryWrapper<Dormitory> dormitoryQueryWrapper = new QueryWrapper<>();
        dormitoryQueryWrapper.eq("dormitory_num", dormitoryNum).eq("room_num", roomNum);
        List<Dormitory> dormitories = dormitoryMapper.selectList(dormitoryQueryWrapper);
        for (Dormitory dormitory : dormitories) {
            QueryWrapper<Student> studentQueryWrapper = new QueryWrapper<>();
            if (dormitory.getUserId() != userId) {
                studentQueryWrapper.eq("user_id", dormitory.getUserId());
                Student student = studentMapper.selectOne(studentQueryWrapper);
                StuUserRoommateDormitoryDTO stuUserDormitoryDTO = new StuUserRoommateDormitoryDTO();
                stuUserDormitoryDTO.setRoommateName(student.getName());
                stuUserDormitoryDTO.setRoommateSex(student.getSex());
                stuUserDormitoryDTO.setRoommateCollege(student.getCollege());
                stuUserDormitoryDTO.setRoommateSpecialty(student.getSpecialty());
                stuUserDormitoryDTO.setRoommateClassName(student.getClassName());
                stuUserDormitoryDTO.setRoommateBedNum(dormitory.getBedNum());
                stuUserDormitoryDTOS.add(stuUserDormitoryDTO);
            }

        }
        return stuUserDormitoryDTOS;
    }

    @Override
    public List<Attendance> getAttendance(Long userId) {
        QueryWrapper<Attendance> attendanceQueryWrapper = new QueryWrapper<>();
        attendanceQueryWrapper.eq("user_id", userId);
        return attendanceMapper.selectList(attendanceQueryWrapper);
    }

    @Override
    public List<Scholarship> getScholarship(Long userId) {
        QueryWrapper<Scholarship> scholarshipQueryWrapper = new QueryWrapper<>();
        scholarshipQueryWrapper.eq("user_id", userId);
        return scholarshipMapper.selectList(scholarshipQueryWrapper);
    }


}
