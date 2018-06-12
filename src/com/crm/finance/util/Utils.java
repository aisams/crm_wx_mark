package com.crm.finance.util;

import android.content.Context;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;

import com.crm.finance.util.timeutil.TimeUtils;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;

/**
 * Created by Administrator on 2018/4/25 0025.
 */

public class Utils {
    private static final String TAG = Utils.class.getSimpleName();

    public static String getVersionNumber(Context context) {
        String version = "";
        PackageManager packageManager = context.getPackageManager();
        PackageInfo packInfo = null;
        try {
            packInfo = packageManager.getPackageInfo(context.getPackageName(), 0);
            version = packInfo.versionName;
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
        return version;
    }

    /**
     * 时间戳转日期
     *
     * @param ms
     * @return
     */
    public static String transForDate(Long ms) {
        String times = TimeUtils.transForDate(ms);
        return times;
    }

    /**
     * 将内容中所有11位电话号码 4-7位****化，例137****0180
     * @param tel
     * @return
     */
    public static String replacePhoneNumber(String tel){
        if(isEmpty(tel))return "";
        // 括号表示组，被替换的部分$n表示第n组的内容,
        try {
            tel = tel.replaceAll("(1[34578]\\d)\\d{4}(\\d{4})([^\\d])", "$1****$2$3");
        }catch (Exception e){
            MyLog.inputLogToFile(TAG,"电话号和谐异常，msg = "+e.getMessage()+",content = "+tel);
        }
        return tel;
    }

    public static String addFuffix(String fileName) {
        int fuffixIndex = fileName.indexOf(".");
        if (fuffixIndex < 0) {
            return fileName + ".jpg";
        }
        return fileName;
    }

    public static boolean isEmpty(String content) {
        if (content == null || content.equals("")) {
            return true;
        }
        return false;
    }


    /**
     * @param sSecret
     * @return md5 32位加密，16位小写加密只需getMd5Value("xxx").substring(8, 24);即可
     */
    public static String getMd5Value(String sSecret) {
        try {
            MessageDigest bmd5 = MessageDigest.getInstance("MD5");
            bmd5.update(sSecret.getBytes());
            int i;
            StringBuffer buf = new StringBuffer();
            byte[] b = bmd5.digest();
            for (int offset = 0; offset < b.length; offset++) {
                i = b[offset];
                if (i < 0)
                    i += 256;
                if (i < 16)
                    buf.append("0");
                buf.append(Integer.toHexString(i));
            }
            return buf.toString();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return "";
    }
}
