package com.crm.finance.util;

import android.content.Context;
import android.content.pm.ApplicationInfo;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.graphics.drawable.Drawable;
import android.os.Environment;

import com.crm.finance.util.rootcmd.RootCmd;
import com.crm.finance.util.timeutil.TimeUtils;

import java.io.File;
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
     * 获取apk包的信息：版本号，名称，图标等
     * @param absPath apk包的绝对路径
     * @param context
     */
    public static int getAPKVersionCode(Context context,String absPath) {

        int versionCode = 0;
        PackageManager pm = context.getPackageManager();
        PackageInfo pkgInfo = pm.getPackageArchiveInfo(absPath,PackageManager.GET_ACTIVITIES);
        if (pkgInfo != null) {
            versionCode = pkgInfo.versionCode; // 得到版本信息
            LogInputUtil.e(TAG, String.format("APK版本号: %s , APK路径;%s", versionCode,absPath));
        }
        return versionCode;
    }

    /**
     * 防止升级后不是系统应用，将应用包也放到system/app目录下
     * @param context
     */
    public static void copyVserAPK(Context context) {
        LogInputUtil.e(TAG,"准备核对版本");
        String sysApkName = "crm.apk";
        String systemPath = Environment.getRootDirectory().getPath();
        int sysAppVersion = Utils.getAPKVersionCode(context, systemPath + File.separator + "app" + File.separator + sysApkName);
        File nowAppFile = null;
        try {
            nowAppFile = new File(context.getPackageManager().getApplicationInfo("com.crm.finance", 0).sourceDir);
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG,"获取当前APK目录异常："+e.getLocalizedMessage());
            return;
        }

        String nowAppParentDir = nowAppFile.getPath();
        LogInputUtil.e(TAG,"当前应用安装目录："+nowAppParentDir);
        int nowAppVersion = Utils.getAPKVersionCode(context, nowAppParentDir);

        if (sysAppVersion == nowAppVersion) {
            LogInputUtil.e(TAG, "两个版本一样，无需覆盖");
            return;//两个版本一样，无需覆盖
        }else if(nowAppVersion == 0){
            MyLog.inputLogToFile(TAG, "缺少data/app/base.apk版本，即当前安装版本源件");
            return;
        }else{
            MyLog.inputLogToFile(TAG, "检测到版本差异，准备覆盖");
        }

        if (!RootCmd.haveRoot()) {
            LogInputUtil.e(TAG, "没ROOT权限");
            return;
        }

        String paramString = "adb shell" + "\n" +
                "su" + "\n" +
                "mount -oremount /system" + "\n" +
                "cp "+nowAppParentDir+"  /system/app/"+sysApkName + "\n" +
                "chmod 777 /system/app/" +sysApkName+ "\n" +
                "exit" + "\n" +
                "exit";
        int result = RootCmd.execRootCmdSilent(paramString);
        if (result == -1) {
            LogInputUtil.e(TAG, "adb执行异常");
        } else {
            LogInputUtil.e(TAG, "adb执行完成");
        }
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
