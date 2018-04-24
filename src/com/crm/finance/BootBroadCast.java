package com.crm.finance;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.crm.finance.util.GlobalCofig;
import com.crm.finance.util.LogInputUtil;

public class BootBroadCast extends BroadcastReceiver {

    private static final String TAG = BootBroadCast.class.getSimpleName();

    @Override
    public void onReceive(Context context, Intent intent) {
        /*
         * 开机启动服务*
         */
        LogInputUtil.e(TAG,"调用广播，intent = "+intent.getAction());
        GlobalCofig.excuteGohnsonService(context);
    }
}
