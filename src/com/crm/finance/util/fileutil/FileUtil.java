package com.crm.finance.util.fileutil;

import android.os.Environment;

import com.crm.finance.util.LogInputUtil;
import com.crm.finance.util.MyLog;
import com.crm.finance.util.Utils;
import com.crm.finance.util.wxutil.WXFileUtil;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.channels.FileChannel;

/**
 * Created by Administrator on 2018/5/8 0008.
 */

public class FileUtil {
    public static String TAG = FileUtil.class.getSimpleName();

    //文件
    public static void copyFile(String oldPath, String newPath) {
        LogInputUtil.e(TAG,"复制文件oldPath = "+oldPath+",newPath = "+newPath);
        try {
            int bytesum = 0;
            int byteread = 0;
            File oldfile = new File(oldPath);
            if (oldfile.exists()) { //文件存在时
                InputStream inStream = new FileInputStream(oldPath); //读入原文件
                FileOutputStream fs = new FileOutputStream(newPath);
                byte[] buffer = new byte[10 * 1024];
                while ( (byteread = inStream.read(buffer)) != -1) {
                    bytesum += byteread; //字节数 文件大小
                    fs.write(buffer, 0, byteread);
                }
                inStream.close();
            }
        }
        catch (Exception e) {
            MyLog.inputLogToFile(TAG,"复制文件异常,errMsg = "+e.getLocalizedMessage());
        }

    }


    //获取SD卡
    public static String getAppExternalPath() {
        // 获取SdCard状态
        String state = Environment.getExternalStorageState();
        // 判断SdCard是否存在并且是可用的
        if (Environment.MEDIA_MOUNTED.equals(state)) {
            if (Environment.getExternalStorageDirectory().canWrite()) {
                return Environment.getExternalStorageDirectory().getPath();
            }
        }
        return "";
    }

    //判断文件是否存在
    public static boolean isFileExists(String filePath){
        if(Utils.isEmpty(filePath))return false;

        File file =new File(filePath);
        if(file != null && file.exists())return  true;

        return false;
    }

    public static long getFileSize(String filePath){
        if(Utils.isEmpty(filePath))return 0;

        File file =new File(filePath);
        if(file != null && file.exists())return  file.length() / 1024;

        return 0;
    }
}
