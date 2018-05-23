package com.crm.finance;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.crm.finance.broadcast.BroadcastManager;
import com.crm.finance.util.GlobalCofig;
import com.crm.finance.util.LogInputUtil;
import com.crm.finance.util.Utils;
import com.marswin89.marsdaemon.MyApplication1;

public class UploadDataLogActivity extends Activity {
    private static final String TAG = UploadDataLogActivity.class.getSimpleName();
    EditText ext_log_input;
    Button btn_send_broadcast;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.upload_datalog_activity);
        initView();
        initListenner();
        initBroadcast();
    }
    public void initView(){
        ext_log_input = (EditText) findViewById(R.id.ext_log_input);
        btn_send_broadcast =  (Button)findViewById(R.id.btn_send_broadcast);
    }
    public void initListenner(){
        btn_send_broadcast.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //BroadcastManager.sendShowTopRankData(GlobalCofig.BROADCAST_WRITE_LOG);
                ext_log_input.setText("");
            }
        });
    }

    BroadcastReceiver mReceiver = null;

    public void initBroadcast() {
        IntentFilter filter = new IntentFilter();
        filter.addAction(GlobalCofig.BROADCAST_WRITE_LOG);
        filter.addAction(GlobalCofig.BROADCAST_ERR_WRITE_LOG);
        mReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                String action = intent.getAction();
                if (action.equals(GlobalCofig.BROADCAST_WRITE_LOG)) {
                    Bundle bundle=intent.getExtras();
                    if(bundle == null)return;
                        String filePath = bundle.getString("filePath");
                        long time = bundle.getLong("time");
                        ext_log_input.append("数据已更新至 "+ Utils.transForDate(time)+" , filePath = "+filePath+"\n");

                }else if(action.equals(GlobalCofig.BROADCAST_ERR_WRITE_LOG)){
                    Bundle bundle=intent.getExtras();
                    if(bundle == null)return;
                    String ErrMsg = bundle.getString("ErrMsg");
                    ext_log_input.append("上传失败： "+ ErrMsg+"\n");
                }
            }
        };
        BroadcastManager.registerReceiver(mReceiver, filter);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        removeBroadcast();
    }
    public void removeBroadcast() {
        BroadcastManager.unregisterReceiver(mReceiver);
    }
}
