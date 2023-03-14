package com.moss.cuzcms.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.moss.cuzcms.dto.StuUserAttendanceDTO;
import com.moss.cuzcms.entity.Attendance;
import org.apache.ibatis.annotations.Mapper;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/9 12:25
 */
@Mapper
public interface AttendanceMapper extends BaseMapper<Attendance> {
}
