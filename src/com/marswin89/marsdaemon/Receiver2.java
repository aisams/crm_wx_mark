package com.marswin89.marsdaemon;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

/**
 * DO NOT do anything in this Receiver!<br/>
 *
 * Created by Mars on 12/24/15.
 */
public class Receiver2 extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        Toast.makeText(context,"Receiver2",Toast.LENGTH_SHORT);
        Log.e("loginput","Receiver2");

    }
}
