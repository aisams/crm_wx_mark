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

        /*
         * 开机启动的Activity*
         * Intent activity=new Intent(context,MyActivity.class);
         * activity.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK );//不加此句会报错。
         * context.startActivity(activity);
         */

        /* 开机启动的应用
        Intent appli = context.getPackageManager().getLaunchIntentForPackage("com.crm.finance");
        context.startActivity(appli);
        */
    }
}
