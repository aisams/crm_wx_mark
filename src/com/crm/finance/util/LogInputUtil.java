package com.crm.finance.util;

import android.app.Activity;
import android.content.Context;
import android.support.v4.app.FragmentActivity;
import android.util.Log;
import android.widget.Toast;



/**
 * Created by Dipa .
 */
public class LogInputUtil {
    private static  LogInputUtil logInputUtil=null;
    public static Toast toast;

    public static final int TOAST_SHORT = 1000;

    public static void showSingleTosat(Context context,String content){
        if(context == null)return;
        if(toast == null ){
            toast=Toast.makeText(context,"",Toast.LENGTH_LONG);
        }
            toast.setText(content);
            toast.show();
    }

    public static void e(String tag,String content){
        Log.e("CRMLog: "+tag, "log:" + content);
    }

    public static void i(String tag,String content){
        Log.i(tag, "log:" + content);
    }

    public static void showToast(Activity activity, String content){
        Toast.makeText(activity,"log:"+content,Toast.LENGTH_LONG).show();
    }


    public static void showSingleTosatShort(Context context,String content){
        if(context == null)return;
        if(toast == null ){
            toast=Toast.makeText(context,"",Toast.LENGTH_SHORT);
        }
        toast.setText(content);
        toast.show();
    }

    public static void makeText(Context context,String content){
        Toast.makeText(context,content,Toast.LENGTH_SHORT).show();
    }

}
