package com.marswin89.marsdaemon;

import android.app.Service;
import android.content.Intent;
import android.os.IBinder;
import android.util.Log;
import android.widget.Toast;

import com.crm.finance.GohnsonService;
import com.crm.finance.util.GlobalCofig;
import com.crm.finance.util.LogInputUtil;

import java.util.Timer;
import java.util.TimerTask;

/**
 * This Service is Persistent Service. Do some what you want to do here.<br/>
 *
 * Created by Mars on 12/24/15.
 */
public class Service1 extends Service{

    private static final String TAG = Service1.class.getSimpleName();

    @Override
    public void onCreate() {
        super.onCreate();
        //TODO do some thing what you want..
        Log.e("loginput","Service1 onCreate");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        if (mTimer != null) {
            mTimer.cancel();
        }
        LogInputUtil.e(TAG,"onDestroy Service1");
        GlobalCofig.excuteGohnsonService(this);
    }

    private TimerTask mTimerTask;
    private Timer mTimer = new Timer(true);

    public void timekeeping() {
        if(mTimerTask != null)return;

        final long startTime = System.currentTimeMillis();
        mTimerTask = new TimerTask() {
            public void run() {
                long endTime = System.currentTimeMillis();
                long existTime = (endTime - startTime) / 1000;
               // LogInputUtil.e(TAG,"timekeeping 存在时长 = "+existTime);

                if(!GlobalCofig.isServiceRunning(GohnsonService.class.getName())){
                    GlobalCofig.excuteGohnsonService(Service1.this);
                    LogInputUtil.e(TAG,"发现进程GohnsonService不在，重启");
                }
            }
        };
        mTimer.schedule(mTimerTask, 0, 5000);//多少秒执行一次

    }
    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {
        //Toast.makeText(this,"守护进程启动！", Toast.LENGTH_SHORT).show();
        LogInputUtil.e("loginput","守护进程启动 ：Service1 onStartCommand");
        timekeeping();
        return super.onStartCommand(intent, flags, startId);
    }

    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }
}
