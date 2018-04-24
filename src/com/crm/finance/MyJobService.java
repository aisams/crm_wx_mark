package com.crm.finance;

import android.app.job.JobParameters;
import android.app.job.JobService;
import android.content.Intent;

import com.crm.finance.util.LogInputUtil;


/**
 * Created by Dipa on 2017/7/31.
 */


public class MyJobService extends JobService {

    private final static String TAG = "MyJobService";

    @Override
    public void onCreate() {
        super.onCreate();
    }

    @Override
    public boolean onStartJob(JobParameters params) {
        Intent service = new Intent(this, GohnsonService.class);
        this.startService(service);

        LogInputUtil.showSingleTosat(this,"onStartJob 执行了");
        LogInputUtil.e(TAG,"onStartJob 执行了");

        jobFinished(params,true);
        return true;
    }

    @Override
    public boolean onStopJob(JobParameters params) {
        return false;
    }


    @Override
    public void onDestroy() {
        super.onDestroy();
    }
}