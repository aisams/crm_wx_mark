package com.crm.finance.broadcast;

import android.content.Intent;

import com.crm.finance.util.GlobalCofig;

/**
 * Created by Administrator on 2018/5/24 0024.
 */

public class BroadcastUtils {
    public static final String BROADCAST_WRITE_UPLOAD_TIME_LOG = "BROADCAST_WRITE_UPLOAD_TIME_LOG";//上传成功加时间戳
    public static final String BROADCAST_WRITE_MSG_LOG = "BROADCAST_WRITE_MSG_LOG";//广播输出文本

    public static final String PARA_LAST_UPLOAD_TIME = "PARA_LAST_UPLOAD_TIME";//最近一次数据上传的时间 参数
    public static final String PARA_DATA_DB_PATH = "PARA_DATA_DB_PATH";//上传的数据库路径
    public static final String PARA_LOG_MSG = "PARA_LOG_MSG";//数据

    public static void sendDataUploadLog(long lastUploadTimeTemporary,String filePath){
        Intent mIntent = new Intent();
        mIntent.putExtra(PARA_LAST_UPLOAD_TIME,lastUploadTimeTemporary);
        mIntent.putExtra(PARA_DATA_DB_PATH,filePath);
        BroadcastManager.sendShowTopRankData(mIntent, BROADCAST_WRITE_UPLOAD_TIME_LOG);
    }
    public static void sendDataUploadErrLog(String ErrMsg){
        Intent mIntent = new Intent();
        mIntent.putExtra(PARA_LOG_MSG,ErrMsg);
        BroadcastManager.sendShowTopRankData(mIntent,BROADCAST_WRITE_MSG_LOG);
    }
}
