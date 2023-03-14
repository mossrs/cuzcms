package com.moss.cuzcms.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.moss.cuzcms.dto.AnutieStuUserDormitoryDTO;
import com.moss.cuzcms.dto.MyPageDTO;
import com.moss.cuzcms.entity.Dormitory;
import com.moss.cuzcms.entity.Student;
import com.moss.cuzcms.mapper.DormitoryMapper;
import com.moss.cuzcms.mapper.StudentMapper;
import com.moss.cuzcms.service.AnutieService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/8 14:02
 */
@Service
@Transactional(rollbackFor = Exception.class)
public class AnutieServiceImpl implements AnutieService {

    @Resource
    private StudentMapper studentMapper;
    @Resource
    private DormitoryMapper dormitoryMapper;

    @Override
    @SuppressWarnings("all")
    public MyPageDTO<AnutieStuUserDormitoryDTO> getAnutieDormitoryPageList(Long page, Long size) {
        Page<Student> studentPage = studentMapper.selectPage(new Page<>(page, size), null);
        List<Student> students = studentPage.getRecords();
        ArrayList<AnutieStuUserDormitoryDTO> anutieStuUserDormitoryDTOS = new ArrayList<>();
        for (Student student : students) {
            QueryWrapper<Dormitory> dormitoryQueryWrapper = new QueryWrapper<>();
            dormitoryQueryWrapper.eq("user_id", student.getUserId());
            Dormitory dormitory = dormitoryMapper.selectOne(dormitoryQueryWrapper);
            AnutieStuUserDormitoryDTO anutieStuUserDormitoryDTO = new AnutieStuUserDormitoryDTO();
            anutieStuUserDormitoryDTO.setDormitoryName(student.getName());
            anutieStuUserDormitoryDTO.setDormitorySex(student.getSex());
            anutieStuUserDormitoryDTO.setDormitoryCollege(student.getCollege());
            anutieStuUserDormitoryDTO.setDormitorySpecialty(student.getSpecialty());
            anutieStuUserDormitoryDTO.setDormitoryClassName(student.getClassName());
            anutieStuUserDormitoryDTO.setDormitoryNum(dormitory.getDormitoryNum());
            anutieStuUserDormitoryDTO.setDormitoryRoomNum(dormitory.getRoomNum());
            anutieStuUserDormitoryDTO.setDormitoryBedNum(dormitory.getBedNum());
            anutieStuUserDormitoryDTO.setUserId(student.getUserId());
            anutieStuUserDormitoryDTOS.add(anutieStuUserDormitoryDTO);
        }
        MyPageDTO<AnutieStuUserDormitoryDTO> anutieStuUserDormitoryDTOMyPageDTO = new MyPageDTO<>();
        anutieStuUserDormitoryDTOMyPageDTO.setCurrentPage(studentPage.getCurrent());
        anutieStuUserDormitoryDTOMyPageDTO.setPageSize(studentPage.getSize());
        anutieStuUserDormitoryDTOMyPageDTO.setTotalPage(studentPage.getPages());
        anutieStuUserDormitoryDTOMyPageDTO.setHasNext(studentPage.hasNext());
        anutieStuUserDormitoryDTOMyPageDTO.setHasPrevious(studentPage.hasPrevious());
        anutieStuUserDormitoryDTOMyPageDTO.setItems(anutieStuUserDormitoryDTOS);
        return anutieStuUserDormitoryDTOMyPageDTO;
    }

    @Override
    public Boolean updateAnutieDormitory(Dormitory dormitory) {
        QueryWrapper<Dormitory> dormitoryQueryWrapper = new QueryWrapper<Dormitory>().eq("user_id", dormitory.getUserId());
        return dormitoryMapper.update(dormitory, dormitoryQueryWrapper) > 0;
    }
}
