package com.crm.finance.util;

import android.database.Cursor;

/**
 * Created by Dipa on 2017/7/18.
 */

public class CursorUtil {
    private static final String TAG = CursorUtil.class.getSimpleName();

    public static int  getInt(Cursor cr, String columnName){
        int value = 0;
        if(cr == null || cr.getColumnIndex(columnName) == -1){
            return  value;
        }
        try {
            value = cr.getInt(cr.getColumnIndex(columnName));
        }catch (Exception e){
            LogInputUtil.e(TAG,"取数据库值异常：msg = "+e.getMessage());
        }
        return value;
    }

    public static long  getLong(Cursor cr, String columnName){
        long value = 0;
        if(cr == null || cr.getColumnIndex(columnName) == -1){
            return  value;
        }
        try {
            value = cr.getLong(cr.getColumnIndex(columnName));
        }catch (Exception e){
            LogInputUtil.e(TAG,"取数据库值异常：msg = "+e.getMessage());
        }
        return value;
    }

    public static String  getString(Cursor cr, String columnName){
        String value = "";
        if(cr == null || cr.getColumnIndex(columnName) == -1){
            return  value;
        }
        try {
            value = cr.getString(cr.getColumnIndex(columnName));
        }catch (Exception e){
            LogInputUtil.e(TAG,"取数据库值异常：msg = "+e.getMessage());
        }
        return value;
    }
    public static byte[]  getBlob(Cursor cr, String columnName){
        byte[] value = new byte[0];
        if(cr == null || cr.getColumnIndex(columnName) == -1){
            return  value;
        }
        try {
            value = cr.getBlob(cr.getColumnIndex(columnName));
        }catch (Exception e){
            LogInputUtil.e(TAG,"取数据库值异常：msg = "+e.getMessage());
        }
        return value;
    }


}
