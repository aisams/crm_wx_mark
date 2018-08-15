package com.crm.finance.util.dbutil;

import android.content.Context;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import com.crm.finance.util.GlobalCofig;

/**
 * Created by Administrator on 2018/8/14 0014.
 */

public class WeChatDBHelper extends SQLiteOpenHelper {
    private Context mContext;

    public WeChatDBHelper(Context context, String name, SQLiteDatabase.CursorFactory factory, int version) {
        super(context, name, factory, version);
        mContext = context;
    }

    @Override
    public void onCreate(SQLiteDatabase sqLiteDatabase) {
    }

    @Override
    public void onUpgrade(SQLiteDatabase sqLiteDatabase, int oldVersion, int newVersion) {

    }
}
