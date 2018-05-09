package com.crm.finance.util;

import com.crm.finance.util.callback.BaseCallback;

import java.io.File;
import java.io.IOException;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.FormBody;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * Created by Dipa on 2017/7/19.
 */

public class OkHttpUtil {
    private static OkHttpClient mOkHttpClient = new OkHttpClient();
    private static final String TAG = OkHttpUtil.class.getSimpleName();

    static {
        mOkHttpClient.newBuilder()
                .connectTimeout(10, TimeUnit.SECONDS)//设置超时时间
                .readTimeout(10, TimeUnit.SECONDS)//设置读取超时时间
                .writeTimeout(10, TimeUnit.SECONDS)//设置写入超时时间
                .build();
    }

    /**
     * 该步会开启异步线程。
     *
     * @param request
     * @return
     * @throws IOException
     */
    public static Response execute(Request request) throws IOException {
        return mOkHttpClient.newCall(request).execute();
    }

    /**
     * 开启异步线程访问网络
     *
     * @param request
     * @param responseCallback
     */
    public static void enqueue(Request request, Callback responseCallback) {
        LogInputUtil.e(TAG, "OKHttp enqueue");
        try {
            mOkHttpClient.newCall(request).enqueue(responseCallback);
        } catch (Exception e) {
            LogInputUtil.e(TAG, "异常请求");
        }
    }

    public static void enqueueUploadFile(String url, String filePath, Map<String, Object> postMap, final BaseCallback baseCallback) {
        RequestBody requestBody = appendMultipartBody(filePath, postMap);
        Request request = new Request.Builder()
                .url(url)
                .post(requestBody)
                .build();

        try {
            Response response = mOkHttpClient.newCall(request).execute();
            String jsonStr =response.body().string();
            if (response.isSuccessful()) {
                baseCallback.Succeed(jsonStr);
            }else{
                baseCallback.Faild(jsonStr);
            }
        } catch (IOException e) {
            baseCallback.Faild(e.fillInStackTrace());
        }
    }


    private static RequestBody getBody(Map<String, String> postMap) {
        FormBody.Builder builder = new FormBody.Builder();
        for (String key : postMap.keySet()) {
            builder.add(key, postMap.get(key));
        }
        RequestBody formBody = builder.build();
        return formBody;
    }

    /**
     * 开启异步线程访问网络, 且不在意返回结果（实现空callback）
     *
     * @param request
     */
    public static void enqueue(final Request request) {
        mOkHttpClient.newCall(request).enqueue(new Callback() {
            @Override
            public void onFailure(Call call, IOException e) {
                String failureStr = "访问失败，msg = " + e.getMessage();
                MyLog.inputLogToFile(TAG, failureStr, true);
            }

            @Override
            public void onResponse(Call call, Response response) throws IOException {
                String responseStr = "访问成功，body = " + response.body().string();
                MyLog.inputLogToFile(TAG, responseStr, true);
            }
        });
    }

    private static RequestBody appendMultipartBody(String filePath, Map<String, Object> params) {

        File file = new File(filePath);
        RequestBody fileBody = RequestBody.create(MediaType.parse("application/octet-stream"), file);
        MultipartBody.Builder builder = new MultipartBody.Builder()
                .setType(MultipartBody.FORM)
                .addFormDataPart("file", file.getName(), fileBody);

        if (params == null || params.isEmpty()) {
            return builder.build();
        }

        for (Map.Entry<String, Object> entry : params.entrySet()) {
            builder.addFormDataPart(entry.getKey(), entry.getValue().toString());
        }
        return builder.build();
    }
}
