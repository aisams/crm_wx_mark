
package com.crm.finance;

import android.app.AlarmManager;
import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.telephony.TelephonyManager;
import android.view.KeyEvent;
import android.view.MotionEvent;
import android.view.View;

import com.crm.finance.util.GlobalCofig;
import com.crm.finance.util.LogInputUtil;
import com.crm.finance.util.MyLog;
import com.crm.finance.util.ShareData;
import com.crm.finance.util.Utils;
import com.tencent.bugly.Bugly;
import com.tencent.bugly.beta.Beta;

import org.apache.cordova.*;

import java.io.DataOutputStream;
import java.util.Set;

import cn.jpush.android.api.JPushInterface;
import cn.jpush.android.api.TagAliasCallback;

public class MainActivity extends CordovaActivity {
    private static final String TAG = MainActivity.class.getSimpleName();

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        excuteInit();
    }

    public void excuteInit(){
        initBugly();
        showLogTip();
        excuteMain();
    }
    public void initBugly(){

        Bugly.init(getApplicationContext(), GlobalCofig.BUGLY_ID, GlobalCofig.BUGLY_ISDEBUG);

     /*   Handler handler = new Handler(Looper.getMainLooper());
        handler.post(new Runnable() {
            @Override
            public void run() {
                Beta.checkUpgrade();
            }
        });*/
    }
    public void showLogTip(){
        boolean isNoInputFileLog = ShareData.getInstance().getBooleanValue(GlobalCofig.IS_INPUT_FILE_LOG,GlobalCofig.LOG_NO_LOG);

        String logStr = "";
        if(isNoInputFileLog){
            logStr="无日志";
        }else{
            logStr="有日志";
        }
        LogInputUtil.showSingleTosatShort(this, Utils.getVersionNumber(this)+"_"+logStr+"版本!");
    }


    float x1 = 0,y1=0,x2=0,y2=0;

    public void excuteMain() {
        Bundle extras = getIntent().getExtras();
        if (extras != null && extras.getBoolean("cdvStartInBackground", false)) {
            moveTaskToBack(true);
        }
        //waitFor操作需开线程，不然部分机型会阻塞进程，后续代码无法执行
        new Thread(new Runnable() {
            @Override
            public void run() {
                //当前应用的代码执行目录
                if (!upgradeRootPermission(getPackageCodePath())) {
                    MyLog.inputLogToFile(TAG, "未获取到Root权限！");
                };
            }
        }).start();

        GlobalCofig.excuteGohnsonService(this);

        boolean isInputFileLog = ShareData.getInstance().getBooleanValue(GlobalCofig.IS_INPUT_FILE_LOG,GlobalCofig.LOG_NO_LOG);
        LogInputUtil.e(TAG,"是否输出日志 主页重启="+isInputFileLog);

        loadUrl(launchUrl, new View.OnLongClickListener() {
                    @Override
                    public boolean onLongClick(View view) {
                        boolean isNoInputFileLog = ShareData.getInstance().getBooleanValue(GlobalCofig.IS_INPUT_FILE_LOG, GlobalCofig.LOG_NO_LOG);
                        ShareData.getInstance().saveBooleanValue(GlobalCofig.IS_INPUT_FILE_LOG, !isNoInputFileLog);
                        isNoInputFileLog = ShareData.getInstance().getBooleanValue(GlobalCofig.IS_INPUT_FILE_LOG, GlobalCofig.LOG_NO_LOG);

                        showInputLogTip(isNoInputFileLog);
                        return false;
                    }
                }, new View.OnTouchListener() {
                    @Override
                    public boolean onTouch(View view, MotionEvent motionEvent) {
                        if (motionEvent.getAction() == MotionEvent.ACTION_DOWN) {
                            //当手指按下的时候
                            x1 = motionEvent.getX();
                            y1 = motionEvent.getY();
                        }
                        if (motionEvent.getAction() == MotionEvent.ACTION_UP) {
                            //当手指离开的时候
                            x2 = motionEvent.getX();
                            y2 = motionEvent.getY();
                            String str = "x1 = " + x1 + ",x2 =" + x2 + ",y1 = " + y1 + ",y2 =" + y2;
                            if (y1 - y2 > 50) {
                                // Log.e(TAG,"手势：向上滑"+str);
                            } else if (y2 - y1 > 50) {
                                //Log.e(TAG,"手势：向下滑"+str);
                            } else if (x1 - x2 > 100) {
                                Intent service = new Intent(MainActivity.this, UploadDataLogActivity.class);
                                MainActivity.this.startActivity(service);
                            } else if (x2 - x1 > 100) {
                            }
                        }
                        return false;
                    }
                }
        );

        UpdateManager manager = new UpdateManager(MainActivity.this);
        // 检查软件更新
        manager.checkUpdate();

        JPushInterface.setDebugMode(true);
        JPushInterface.init(this);

        TelephonyManager tm = (TelephonyManager) getApplicationContext().getSystemService(TELEPHONY_SERVICE);

        // 调用 JPush 接口来设置别名。
        JPushInterface.setAlias(getApplicationContext(),
                tm.getDeviceId(),
                mAliasCallback);
        Intent alarmIntent = new Intent("com.crm.finance.ACTION_SEND");
        PendingIntent sendIntent = PendingIntent.getBroadcast(getBaseContext(), 0, alarmIntent, PendingIntent.FLAG_UPDATE_CURRENT);
        AlarmManager am = (AlarmManager) getSystemService(Context.ALARM_SERVICE);
        //am.cancel(sendIntent);
        //间隔多久去触发广播
        am.setRepeating(AlarmManager.RTC_WAKEUP, System.currentTimeMillis(), GlobalCofig.EXECUTE_BROADCAST_INTERVAL, sendIntent);
    }



    public void showInputLogTip(boolean isNoInputLog){
        String tipStr="";
        if(isNoInputLog){
            tipStr="日志已关闭！";
        }else{
            tipStr="日志已打开！";
        }
        LogInputUtil.showSingleTosat(MainActivity.this,tipStr);
        GlobalCofig.stopGohnsonService(this);
    }

    private final TagAliasCallback mAliasCallback = new TagAliasCallback() {
        @Override
        public void gotResult(int code, String alias, Set<String> tags) {
        }
    };

    /**
     * 应用程序运行命令获取 Root权限，设备必须已破解(获得ROOT权限)
     *
     * @return 应用程序是/否获取Root权限
     */
    public static boolean upgradeRootPermission(String pkgCodePath) {
        Process process = null;
        DataOutputStream os = null;
        try {
            process = Runtime.getRuntime().exec("su"); //切换到root帐号
            String cmd = "chmod 777 " + pkgCodePath;

            //NewThread(process);
            os = new DataOutputStream(process.getOutputStream());
            os.writeBytes(cmd + "\n");
            os.writeBytes("chmod -R 777 " + GlobalCofig.OPERATION_DIR + "\n");
            os.writeBytes("chmod -R 777 " + GlobalCofig.OPERATION_DIR_1 + "\n");
            os.writeBytes("chmod -R 777 " + GlobalCofig.OPERATION_DIR_0 + "\n");
            os.writeBytes("chmod -R 777 " + GlobalCofig.OPERATION_DIR_11 + "\n");
            os.writeBytes("exit\n");
            os.flush();
            process.waitFor();
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, "root权限异常 " + e.getMessage());

            return false;
        } finally {
            try {
                if (os != null) {
                    os.close();
                }
                process.destroy();
            } catch (Exception e) {
                MyLog.inputLogToFile(TAG, "root权限异常2 " + e.getMessage());
            }
        }
        return true;
    }

    @Override
    public void onDestroy() {
        System.exit(0);
        super.onDestroy();
    }
}
