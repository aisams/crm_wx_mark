package com.crm.finance.util.timeutil;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by Administrator on 2018/5/30 0030.
 */

public class TimeUtils {
    /**
     * 时间戳转日期,yyyy年MM月dd日HH时mm分ss秒
     * @param ms 1525865371000
     * @return
     */
    public static String transForDate(Long ms) {
        SimpleDateFormat sdr = new SimpleDateFormat("yyyy年MM月dd日HH时mm分ss秒");
        @SuppressWarnings("unused")
        String times = sdr.format(new Date(ms));
        return times;
    }

    /**
     * 时间戳转日期,yyyy/MM/dd HH:mm:ss
     * @param ms 1525865371000
     * @return
     */
    public static String transForDateSimpleness(Long ms) {
        SimpleDateFormat sdr = new SimpleDateFormat("yyyy_MM_dd HH:mm:ss");
        @SuppressWarnings("unused")
        String times = sdr.format(new Date(ms));
        return times;
    }
}
