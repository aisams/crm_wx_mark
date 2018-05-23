package com.crm.finance.broadcast;

import android.content.BroadcastReceiver;
import android.content.Intent;
import android.content.IntentFilter;
import android.support.v4.content.LocalBroadcastManager;

import com.marswin89.marsdaemon.MyApplication1;

/**
 * Created by Dipa
 */
public class BroadcastManager {
    //发送广播
    public static void sendShowTopRankData(String broType) {
        Intent mIntent = new Intent();
        mIntent.setAction(broType);
        LocalBroadcastManager.getInstance(MyApplication1.getApp())
                .sendBroadcast(mIntent);
    }

    public static void sendShowTopRankData(Intent mIntent,String broType) {
        mIntent.setAction(broType);
        LocalBroadcastManager.getInstance(MyApplication1.getApp())
                .sendBroadcast(mIntent);
    }


    //注销广播
    public static void unregisterReceiver(BroadcastReceiver mReceiver) {
        if (mReceiver != null) {
            LocalBroadcastManager.getInstance(
                    MyApplication1.getApp()).unregisterReceiver(
                    mReceiver);
            mReceiver = null;
        }
    }

    //注册广播
    public static  void registerReceiver(BroadcastReceiver mReceiver, IntentFilter filter) {
        LocalBroadcastManager.getInstance(MyApplication1.getApp())
                .registerReceiver(mReceiver, filter);
    }
}
