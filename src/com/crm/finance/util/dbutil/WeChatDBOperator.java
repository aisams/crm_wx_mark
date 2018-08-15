package com.crm.finance.util.dbutil;

import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;

import com.crm.finance.dao.RcontactDao;
import com.crm.finance.util.GlobalCofig;
import com.crm.finance.util.LogInputUtil;
import com.crm.finance.util.MyLog;
import com.crm.finance.util.ShareData;
import com.crm.finance.util.Utils;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Dipa on 2018/8/14 0014.
 */

public class WeChatDBOperator {
    private WeChatDBHelper dbHelper;
    private SQLiteDatabase db;
    public static final String TAG = WeChatDBOperator.class.getSimpleName();
    private final String USERNAME = "username";//微信id
    private final String NICKNAME = "nickname";//微信昵称
    private final String CONREMARK = "conRemark";//微信备注
    private  Context context;
    public WeChatDBOperator(Context context) {
        dbHelper = new WeChatDBHelper(context, GlobalCofig.WECHAT_DB_NAME + ".db", null, 1);
        db = dbHelper.getWritableDatabase();
        this.context = context;
    }
    public void close(){
        if(db != null){
            db.close();
        }
    }

    /**
     * 当表不存在创建用户表，按用户名建表
     * @param tableName
     */
    public void createTable(String tableName) {
        String create_table_sqlStr = "create table if not exists " + tableName + "("+USERNAME+" text primary key,"+NICKNAME+" text,"+CONREMARK+" text)";
        try {
            db.execSQL(create_table_sqlStr);
            addRcontactPath(context,tableName);
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, e.getLocalizedMessage());
        }
    }

    //获取所有会话表名，支持删除重新上传好友
    public static void addRcontactPath(Context context, String rcontactPath){
        Set<String> rcontactSer = ShareData.getInstance().getStringSetValue(context,GlobalCofig.ALL_RCONTACT_PATH, new HashSet<String>());
        rcontactSer.add(rcontactPath);
        ShareData.getInstance().saveStringSetValue(GlobalCofig.ALL_RCONTACT_PATH,rcontactSer);
    }

    /**
     * 插入单条数据，若数据在表中，则更新
     * @param tableName
     * @param dao
     */
    public void add(String tableName, RcontactDao dao) {
        if(Utils.isEmpty(tableName) || dao == null)return;

        String userName = dao.getUsername();
        String conRemark = dao.getConRemark();
        try {
            boolean exist = isExist(tableName,userName);
            if(exist){
                LogInputUtil.e(TAG,"好友存在数据库中,准备更新,userName ="+userName+",tableName = "+tableName+",conRemark = "+conRemark);
                String update_rcontast_sqlStr = "update " + tableName + " set "+NICKNAME+"='"+dao.getNickname()+"',"+CONREMARK+"='"+conRemark+"' where "+USERNAME+"='"+userName+"'";
                db.execSQL(update_rcontast_sqlStr);
            }else {
                LogInputUtil.e(TAG,"好友不在数据库中,准备插入,userName ="+userName+",tableName = "+tableName+",conRemark = "+conRemark);
                String inser_rcontast_sqlStr = "insert into " + tableName + " values('"+userName+"','"+dao.getNickname()+"','"+conRemark+"')";
                db.execSQL(inser_rcontast_sqlStr);
            }
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, e.getLocalizedMessage());
        }
    }

    public void addList(String tableName,ArrayList<Object> list){//
        if(Utils.isEmpty(tableName) || list == null)return;
        int listSize = list.size();
        for(int i=0;i<listSize;i++){
            RcontactDao dao = (RcontactDao) list.get(i);
            add(tableName,dao);
        }
    }

    public boolean isExist(String tableName, String username) {
        boolean exist = false;
        Cursor c = null;
        try {
            String select_rcontast_sqlStr = "select *from " + tableName + " where "+USERNAME+"='"+username+"'" ;
            c = db.rawQuery(select_rcontast_sqlStr, null);
            while (c.moveToNext()) {
                exist = true;
            }
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, e.getLocalizedMessage());
        } finally {
            if (c != null) c.close();
        }
        return exist;
    }

    /**
     * 清除所有表数据，好友重新上传
     */
    public  void dropAllTable(){
        Set<String> rcontactSer = ShareData.getInstance().getStringSetValue(context,GlobalCofig.ALL_RCONTACT_PATH, new HashSet<String>());
        for(String pathStr:rcontactSer){
            String drop_all_tableStr = "DELETE FROM "+pathStr;
            LogInputUtil.e(TAG,"清除好友路径："+pathStr);
            try {
                db.execSQL(drop_all_tableStr);
            } catch (Exception e) {
                MyLog.inputLogToFile(TAG, e.getLocalizedMessage());
            }
        }
    }

    /**
     * \查询表中数据
     * @param tableName
     * @return
     */
    public ArrayList<Object> selectAll(String tableName) {
        Cursor c = null;
        ArrayList<Object> daos = new ArrayList<Object>();
        try {
            String select_rcontast_sqlStr = "select *from " + tableName;
            c = db.rawQuery(select_rcontast_sqlStr, null);
            while (c.moveToNext()) {
                RcontactDao dao = new RcontactDao();
                dao.setUsername(c.getString(0));
                dao.setNickname(c.getString(1));
                dao.setConRemark(c.getString(2));
                daos.add(dao);
            }
            c.close();
        } catch (Exception e) {
            createTable(tableName);//没有表就创建
            MyLog.inputLogToFile(TAG, e.getLocalizedMessage()+",表不存在会新建");
        } finally {
            if (c != null) c.close();
        }
        return daos;
    }


}
