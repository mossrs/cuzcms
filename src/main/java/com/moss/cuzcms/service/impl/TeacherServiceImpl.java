package com.moss.cuzcms.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.moss.cuzcms.dto.MyPageDTO;
import com.moss.cuzcms.dto.StuUserAttendanceDTO;
import com.moss.cuzcms.dto.StuUserScoreDTO;
import com.moss.cuzcms.entity.Attendance;
import com.moss.cuzcms.entity.Message;
import com.moss.cuzcms.entity.Score;
import com.moss.cuzcms.entity.Student;
import com.moss.cuzcms.mapper.AttendanceMapper;
import com.moss.cuzcms.mapper.MessageMapper;
import com.moss.cuzcms.mapper.ScoreMapper;
import com.moss.cuzcms.mapper.StudentMapper;
import com.moss.cuzcms.service.TeacherService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/6 12:36
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class TeacherServiceImpl implements TeacherService {

    @Resource
    private StudentMapper studentMapper;
    @Resource
    private ScoreMapper scoreMapper;
    @Resource
    private AttendanceMapper attendanceMapper;
    @Resource
    private MessageMapper messageMapper;


    @Override
    @SuppressWarnings("all")
    public MyPageDTO<StuUserScoreDTO> getScorePageList(Long page, Long size) {
        Page<Score> selectPage = scoreMapper.selectPage(new Page<>(page, size), null);
        ArrayList<StuUserScoreDTO> stuUserScoreDTOS = new ArrayList<>();
        for (Score score : selectPage.getRecords()) {
            Long userId = score.getUserId();
            Student student = studentMapper.selectById(userId);
            String name = student.getName();
            String sex = student.getSex();
            String college = student.getCollege();
            String specialty = student.getSpecialty();
            String className = student.getClassName();
            String mathScore = score.getMathScore();
            String englishScore = score.getEnglishScore();
            String javaScore = score.getJavaScore();
            String pythonScore = score.getPythonScore();
            String cppScore = score.getCppScore();
            StuUserScoreDTO stuUserScoreDTO = new StuUserScoreDTO();
            stuUserScoreDTO.setStuName(name);
            stuUserScoreDTO.setStuSex(sex);
            stuUserScoreDTO.setStuCollege(college);
            stuUserScoreDTO.setStuSpecialty(specialty);
            stuUserScoreDTO.setStuClassName(className);
            stuUserScoreDTO.setMathScore(mathScore);
            stuUserScoreDTO.setEnglishScore(englishScore);
            stuUserScoreDTO.setJavaScore(javaScore);
            stuUserScoreDTO.setPythonScore(pythonScore);
            stuUserScoreDTO.setCppScore(cppScore);
            stuUserScoreDTO.setUserId(userId);
            stuUserScoreDTOS.add(stuUserScoreDTO);
        }
        MyPageDTO<StuUserScoreDTO> stuUserScoreDTOMyPageDTO = new MyPageDTO<>();
        stuUserScoreDTOMyPageDTO.setCurrentPage(selectPage.getCurrent());
        stuUserScoreDTOMyPageDTO.setPageSize(selectPage.getSize());
        stuUserScoreDTOMyPageDTO.setTotalPage(selectPage.getPages());
        stuUserScoreDTOMyPageDTO.setHasNext(selectPage.hasNext());
        stuUserScoreDTOMyPageDTO.setHasPrevious(selectPage.hasPrevious());
        stuUserScoreDTOMyPageDTO.setItems(stuUserScoreDTOS);
        return stuUserScoreDTOMyPageDTO;
    }

    @Override
    public boolean updateScore(Score score) {
        QueryWrapper<Student> studentQueryWrapper = new QueryWrapper<>();
        studentQueryWrapper.eq("user_id", score.getUserId());
        Student student = studentMapper.selectOne(studentQueryWrapper);
        QueryWrapper<Score> scoreQueryWrapper = new QueryWrapper<>();
        scoreQueryWrapper.eq("user_id", score.getUserId());
        Message message = new Message();
        message.setTitle("成绩修改提醒");
        message.setContent("您的成绩信息已被修改，请注意查看，如有疑问，请联系教务办");
        message.setSendName("教务办");
        message.setReceiveName(student.getName());
        messageMapper.insert(message);
        return scoreMapper.update(score, scoreQueryWrapper) > 0;
    }

    @Override
    @SuppressWarnings("all")
    public MyPageDTO<StuUserAttendanceDTO> getAttendancePageList(Long page, Long size) {
        Page<Attendance> attendancePage = attendanceMapper.selectPage(new Page<>(page, size), null);
        ArrayList<StuUserAttendanceDTO> stuUserAttendanceDTOS = new ArrayList<>();
        List<Attendance> attendances = attendancePage.getRecords();
        for (Attendance attendance : attendances) {
            QueryWrapper<Student> studentQueryWrapper = new QueryWrapper<>();
            studentQueryWrapper.eq("user_id", attendance.getUserId());
            Student student = studentMapper.selectOne(studentQueryWrapper);
            StuUserAttendanceDTO stuUserAttendanceDTO = new StuUserAttendanceDTO();
            stuUserAttendanceDTO.setStuName(student.getName());
            stuUserAttendanceDTO.setStuSex(student.getSex());
            stuUserAttendanceDTO.setStuCollege(student.getCollege());
            stuUserAttendanceDTO.setStuSpecialty(student.getSpecialty());
            stuUserAttendanceDTO.setStuClassName(student.getClassName());
            stuUserAttendanceDTO.setUserId(student.getUserId());
            stuUserAttendanceDTO.setSubject(attendance.getSubject());
            stuUserAttendanceDTO.setState(attendance.getState());
            stuUserAttendanceDTO.setUpdateTime(attendance.getUpdateTime());
            stuUserAttendanceDTOS.add(stuUserAttendanceDTO);
        }
        MyPageDTO<StuUserAttendanceDTO> stuUserAttendanceDTOMyPageDTO = new MyPageDTO<>();
        stuUserAttendanceDTOMyPageDTO.setCurrentPage(attendancePage.getCurrent());
        stuUserAttendanceDTOMyPageDTO.setPageSize(attendancePage.getSize());
        stuUserAttendanceDTOMyPageDTO.setTotalPage(attendancePage.getPages());
        stuUserAttendanceDTOMyPageDTO.setHasNext(attendancePage.hasNext());
        stuUserAttendanceDTOMyPageDTO.setHasPrevious(attendancePage.hasPrevious());
        stuUserAttendanceDTOMyPageDTO.setItems(stuUserAttendanceDTOS);
        return stuUserAttendanceDTOMyPageDTO;
    }

    @Override
    public boolean updateAttendance(Attendance attendance) {
        QueryWrapper<Student> studentQueryWrapper = new QueryWrapper<>();
        studentQueryWrapper.eq("user_id", attendance.getUserId());
        Student student = studentMapper.selectOne(studentQueryWrapper);
        QueryWrapper<Attendance> attendanceQueryWrapper = new QueryWrapper<>();
        attendanceQueryWrapper.eq("user_id", attendance.getUserId())
                .eq("subject", attendance.getSubject());
        Message message = new Message();
        message.setTitle("考勤修改提醒");
        message.setContent("您的考勤信息已被修改，请注意查看，如有疑问，请联系教务办");
        message.setSendName("教务办");
        message.setReceiveName(student.getName());
        messageMapper.insert(message);
        return attendanceMapper.update(attendance, attendanceQueryWrapper) > 0;
    }
}
