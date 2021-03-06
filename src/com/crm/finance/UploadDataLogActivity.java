package com.crm.finance;

import android.app.Activity;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

import com.crm.finance.broadcast.BroadcastManager;
import com.crm.finance.broadcast.BroadcastUtils;
import com.crm.finance.util.GlobalCofig;
import com.crm.finance.util.LogInputUtil;
import com.crm.finance.util.ShareData;
import com.crm.finance.util.Utils;
import com.crm.finance.util.WXDataFormJsonUtil;
import com.crm.finance.util.dbutil.WeChatDBOperator;
import com.marswin89.marsdaemon.MyApplication1;
import com.tencent.bugly.Bugly;
import com.tencent.bugly.beta.Beta;

public class UploadDataLogActivity extends Activity {
    private static final String TAG = UploadDataLogActivity.class.getSimpleName();
    EditText ext_log_input;
    Button btn_send_broadcast,btn_update,btn_upload_rcontact;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.upload_datalog_activity);
        initView();
        initListenner();
        initBroadcast();
        initData();
    }
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        LogInputUtil.e(TAG,"退出2");
        return super.onKeyDown(keyCode, event);
    }
    public void initData(){
        String lastUploadTime = ShareData.getInstance().getStringValue(this, GlobalCofig.MESSAGE_LAST_UPLOAD_TIME_ONLY,"");
        if(Utils.isEmpty(lastUploadTime))return;
        ext_log_input.append(lastUploadTime+"的数据已上传\n\n");
    }
    public void initView(){
        ext_log_input = (EditText) findViewById(R.id.ext_log_input);
        btn_send_broadcast =  (Button)findViewById(R.id.btn_send_broadcast);
        btn_update =  (Button)findViewById(R.id.btn_update);
        btn_upload_rcontact =  (Button)findViewById(R.id.btn_upload_rcontact);
    }
    public void initListenner(){
        btn_send_broadcast.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                //BroadcastManager.sendShowTopRankData(GlobalCofig.BROADCAST_WRITE_LOG);
                ext_log_input.setText("");
            }
        });
        btn_upload_rcontact.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                WeChatDBOperator weChatDBOperator =new WeChatDBOperator(UploadDataLogActivity.this);
                weChatDBOperator.dropAllTable();
                LogInputUtil.showSingleTosat(UploadDataLogActivity.this,"正在重新上传!");
            }
        });
        btn_update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Bugly.init(getApplicationContext(), GlobalCofig.BUGLY_ID, GlobalCofig.BUGLY_ISDEBUG);
                Beta.checkUpgrade();
            }
        });
    }

    BroadcastReceiver mReceiver = null;

    public void initBroadcast() {
        IntentFilter filter = new IntentFilter();
        filter.addAction(BroadcastUtils.BROADCAST_WRITE_UPLOAD_TIME_LOG);
        filter.addAction(BroadcastUtils.BROADCAST_WRITE_MSG_LOG);
        mReceiver = new BroadcastReceiver() {
            @Override
            public void onReceive(Context context, Intent intent) {
                String action = intent.getAction();
                if (action.equals(BroadcastUtils.BROADCAST_WRITE_UPLOAD_TIME_LOG)) {
                    Bundle bundle=intent.getExtras();
                    if(bundle == null)return;
                        String filePath = bundle.getString(BroadcastUtils.PARA_DATA_DB_PATH);
                        long time = bundle.getLong(BroadcastUtils.PARA_LAST_UPLOAD_TIME);
                        ext_log_input.append(Utils.transForDate(time)+"的数据已上传 , filePath = "+filePath+"\n\n");

                }else if(action.equals(BroadcastUtils.BROADCAST_WRITE_MSG_LOG)){
                    Bundle bundle=intent.getExtras();
                    if(bundle == null)return;
                    String msg = bundle.getString(BroadcastUtils.PARA_LOG_MSG);
                    ext_log_input.append( msg+"\n\n");
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
