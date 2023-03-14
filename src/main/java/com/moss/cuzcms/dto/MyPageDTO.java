package com.moss.cuzcms.dto;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/5 15:49
 */
@Data
public class MyPageDTO<T> implements Serializable {
    private static final long serialVersionUID = 1L;
    private Long currentPage;
    private Long pageSize;
    private Long totalPage;
    private Boolean hasNext;
    private Boolean hasPrevious;
    private List<T> items;

    public MyPageDTO() {
    }

    public MyPageDTO(Page<T> page) {
        setCurrentPage(page.getCurrent());
        setPageSize(page.getSize());
        setTotalPage(page.getPages());
        setHasNext(page.hasNext());
        setHasPrevious(page.hasPrevious());
        setItems(page.getRecords());
    }
}
