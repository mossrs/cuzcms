package com.moss.cuzcms.dto;

import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * @author z's'b
 * @version 1.0
 * @date 2022/12/4 8:46
 */
@Data
public class ResLoginUserInfoDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long userId;

    private List<String> roles;

    private List<String> permissions;

}
