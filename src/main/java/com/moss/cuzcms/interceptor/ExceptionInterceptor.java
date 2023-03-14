package com.moss.cuzcms.interceptor;


import cn.dev33.satoken.util.SaResult;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/**
 * @author z's'b
 * 异常处理器 将所有的错误都抛到表现层 然后可以精准捕获每一个异常
 * <p>
 * 第一个是用于返回自己捕获的异常，在业务层打印错误日志并交由处理器返回用户友好提示
 * 第二个是用于返回未捕获的异常，由处理器统一打印日志并返回用户友好提示
 */
@RestControllerAdvice
@Slf4j
public class ExceptionInterceptor {

    @ExceptionHandler(RuntimeException.class)
    public SaResult catchRuntimeException(RuntimeException e) {
        e.printStackTrace();
        return SaResult.error(e.getMessage());
    }

    @ExceptionHandler(Exception.class)
    public SaResult catchSqlException(Exception e) {
        e.printStackTrace();
        return SaResult.error("系统出错了，别担心，刷新试试 ^_^");
    }
}
