package com.crm.finance.util;

import com.crm.finance.util.callback.BaseCallback;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

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
    //上传文件
    public void uploadFile(String localPath,String serviceSavePath,BaseCallback baseCallback){
        String url = GlobalCofig.SERVICE_UPLOAD_FILE_URL;

        Map<String,Object> params = new HashMap<String,Object>();
        //文件保存到服务端的地址
        params.put("fileFullPath",serviceSavePath);
        params.put("cover","1");//是否覆盖(0 不覆盖 1 覆盖 默认为0)
        OkHttpUtil.enqueueUploadFile(url, localPath, params,baseCallback);
    }

    public void enqueue(String url,String json){
        enqueue(url,json,null);
    }

    public void enqueue(String url, String json, Callback callback){
        RequestBody body = RequestBody.create(GlobalCofig.JSON, json);
        Request request = new Request.Builder().url(url).post(body).build();
        if(callback == null){
            OkHttpUtil.enqueue(request);
        }else{
            OkHttpUtil.enqueue(request,callback);
        }
    }

}
