package com.crm.finance.util;

import okhttp3.Callback;
import okhttp3.Request;
import okhttp3.RequestBody;

/**
 * Created by Dipa on 2018/1/11.
 */

public class UploadManager {
    private static final String TAG = UploadManager.class.getSimpleName();
    private  static UploadManager uploadManager = null;

    public  static UploadManager getInit(){
        if(uploadManager == null){
            uploadManager  = new UploadManager();
        }
        return  uploadManager;
    }

    //定时上报心跳
    public void deviceHeartBeat(String json){
        String url = GlobalCofig.SERVICE_URL+"/weixin/deviceheartbeat";
        enqueue(url,json);
    }

    public void enqueue(String url,String json){
        enqueue(url,json,null);
    }

    public void enqueue(String url, String json, Callback callback){
        String logStr = "访问地址为："+url+",访问传参为："+json;
        MyLog.inputLogToFile(TAG,logStr,GlobalCofig.isWriteHearbeat);

        RequestBody body = RequestBody.create(GlobalCofig.JSON, json);
        Request request = new Request.Builder().url(url).post(body).build();
        if(callback == null){
            OkHttpUtil.enqueue(request);
        }else{
            OkHttpUtil.enqueue(request,callback);
        }
    }
}
