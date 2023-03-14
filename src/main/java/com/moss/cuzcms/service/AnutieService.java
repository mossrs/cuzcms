package com.moss.cuzcms.service;

import com.moss.cuzcms.dto.AnutieStuUserDormitoryDTO;
import com.moss.cuzcms.dto.MyPageDTO;
import com.moss.cuzcms.entity.Dormitory;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/8 14:01
 */
public interface AnutieService {

    /**
     * 返回所有学生用户分页信息
     *
     * @param page 页码
     * @param size 每页数量
     * @return MyPageDTO<AnutieDormitoryDTO>
     */
    MyPageDTO<AnutieStuUserDormitoryDTO> getAnutieDormitoryPageList(Long page, Long size);

    /**
     * 后勤办修改寝室信息
     *
     * @param dormitory 寝室信息
     * @return 修改结果
     */
    Boolean updateAnutieDormitory(Dormitory dormitory);
}
