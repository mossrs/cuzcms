package com.moss.cuzcms;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author z's'b
 */
@SpringBootApplication
@MapperScan({"com.gitee.sunchenbin.mybatis.actable.dao.*", "com.moss.cuzcms"})
@ComponentScan(basePackages = {"com.gitee.sunchenbin.mybatis.actable.manager.*", "com.moss.cuzcms"})
public class CuzcmsApplication {

    public static void main(String[] args) {
        SpringApplication.run(CuzcmsApplication.class, args);
    }

}
