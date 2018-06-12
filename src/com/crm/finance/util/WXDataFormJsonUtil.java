package com.crm.finance.util;

import android.content.Context;
import android.database.Cursor;

import com.crm.finance.dao.ChatRoomDao;
import com.crm.finance.dao.ImgFlagDao;
import com.crm.finance.dao.MessageDao;
import com.crm.finance.dao.RcontactDao;
import com.crm.finance.dao.UploadDataDao;
import com.crm.finance.dao.UserInfoDao;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import net.sqlcipher.database.SQLiteDatabase;

import java.io.File;
import java.util.ArrayList;

/**
 * Created by Dipa on 2017/7/18.
 */

public class WXDataFormJsonUtil {
    private static final String TAG = WXDataFormJsonUtil.class.getSimpleName();


    public static ArrayList<Object> getMessageDataInDB(Context context, SQLiteDatabase dataTarget, File file) {
        long message_last_upload_time = ShareData.getInstance().getLongValue(context, GlobalCofig.MESSAGE_LAST_UPLOAD_TIME + file.getPath(), 0);
        LogInputUtil.e(TAG, "取出的的message_last_upload_time = " + message_last_upload_time);

        Cursor cr = null;
        ArrayList<Object> daoList = new ArrayList<Object>();

        try {
            cr = dataTarget.rawQuery("select * from message where createTime > " + message_last_upload_time + " limit " + GlobalCofig.UPLOAD_NUMBER, null);
            if (cr.moveToFirst()) {
                MyLog.inputLogToFile(TAG, "message 表准备上传数据条数= " + cr.getCount() + ",时间为 = " + Utils.transForDate(message_last_upload_time) + "(" + message_last_upload_time + ")");
                for (int j = 0; j < cr.getCount(); j++) {

                    long msgId = CursorUtil.getLong(cr, "msgId");
                    long msgSvrId = CursorUtil.getLong(cr, "msgSvrId");
                    int type = CursorUtil.getInt(cr, "type");
                    int status = CursorUtil.getInt(cr, "status");
                    int isSend = CursorUtil.getInt(cr, "isSend");
                    long isShowTimer = CursorUtil.getLong(cr, "isShowTimer");
                    long createTime = CursorUtil.getLong(cr, "createTime");
                    String talker = CursorUtil.getString(cr, "talker");
                    String content = CursorUtil.getString(cr, "content");
                    content = Utils.replacePhoneNumber(content);
                    String imgPath = CursorUtil.getString(cr, "imgPath");
                    String reserved = CursorUtil.getString(cr, "reserved");
                    String transContent = CursorUtil.getString(cr, "transContent");
                    String transBrandWording = CursorUtil.getString(cr, "transBrandWording");
                    long talkerId = CursorUtil.getLong(cr, "talkerId");
                    String bizClientMsgId = CursorUtil.getString(cr, "bizClientMsgId");
                    long bizChatId = CursorUtil.getLong(cr, "bizChatId");
                    String bizChatUserId = CursorUtil.getString(cr, "bizChatUserId");
                    long msgSeq = CursorUtil.getLong(cr, "msgSeq");
                    int flag = CursorUtil.getInt(cr, "flag");

                    MessageDao dao = new MessageDao();
                    dao.setMsgId(msgId);
                    dao.setMsgSvrId(msgSvrId);
                    dao.setType(type);
                    dao.setStatus(status);
                    dao.setIsSend(isSend);
                    dao.setIsShowTimer(isShowTimer);
                    dao.setCreateTime(createTime);
                    dao.setTalker(talker);
                    dao.setContent(content);
                    dao.setImgPath(imgPath);
                    dao.setReserved(reserved);
                    dao.setTransContent(transContent);
                    dao.setTransBrandWording(transBrandWording);
                    dao.setTalkerId(talkerId);
                    dao.setBizChatId(bizChatId);
                    dao.setBizChatUserId(bizChatUserId);
                    dao.setBizClientMsgId(bizClientMsgId);
                    dao.setMsgSeq(msgSeq);
                    dao.setFlag(flag);

                    if (j == cr.getCount() - 1) {
                        String timeTemporaryStr = GlobalCofig.MESSAGE_LAST_UPLOAD_TIME_TEMPORARY + file.getPath();
                        ShareData.getInstance().saveLongValue(context, timeTemporaryStr, createTime);
                        long timeTemporary = ShareData.getInstance().getLongValue(context, timeTemporaryStr, 0);
                        LogInputUtil.e(TAG, "当前时间（临时）：" + timeTemporaryStr + " = " + timeTemporary);
                    }

                    daoList.add(dao);
                    cr.moveToNext();
                }
            }
            cr.close();
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, "查询表messge异常，msg = " + e.getMessage());
            daoList = null;
        } finally {
            if (cr != null)
                cr.close();
        }

        return daoList;
    }

    public static ArrayList<Object> getChatRoomDataInDB(SQLiteDatabase dataTarget) {
        Cursor cr =null;
        ArrayList<Object> daoList = new ArrayList<Object>();
        try {
            cr = dataTarget.rawQuery("select * from chatroom", null);
            if (cr.moveToFirst()) {
                MyLog.inputLogToFile(TAG, "chatroom 表准备上传数据条数= " + cr.getCount());
                for (int j = 0; j < cr.getCount(); j++) {

                    String chatroomname = CursorUtil.getString(cr, "chatroomname");
                    long addtime = CursorUtil.getLong(cr, "addtime");
                    String memberlist = CursorUtil.getString(cr, "memberlist");
                    String displayname = CursorUtil.getString(cr, "displayname");
                    String chatroomnick = CursorUtil.getString(cr, "chatroomnick");
                    long roomflag = CursorUtil.getLong(cr, "roomflag");
                    String roomowner = CursorUtil.getString(cr, "roomowner");
                    byte[] roomdata = CursorUtil.getBlob(cr, "roomdata");
                    String roomdataStr = new String(roomdata, "UTF-8");
                    long isShowname = CursorUtil.getLong(cr, "isShowname");
                    String selfDisplayName = CursorUtil.getString(cr, "selfDisplayName");
                    long style = CursorUtil.getLong(cr, "style");
                    long chatroomdataflag = CursorUtil.getLong(cr, "chatroomdataflag");
                    long modifytime = CursorUtil.getLong(cr, "modifytime");
                    String chatroomnotice = CursorUtil.getString(cr, "chatroomnotice");
                    long chatroomVersion = CursorUtil.getLong(cr, "chatroomVersion");
                    String chatroomnoticeEditor = CursorUtil.getString(cr, "chatroomnoticeEditor");
                    long chatroomnoticePublishTime = CursorUtil.getLong(cr, "chatroomnoticePublishTime");
                    long chatroomLocalVersion = CursorUtil.getLong(cr, "chatroomLocalVersion");

                    ChatRoomDao dao = new ChatRoomDao();
                    dao.setChatroomname(chatroomname);
                    dao.setAddtime(addtime);
                    dao.setMemberlist(memberlist);
                    dao.setDisplayname(displayname);
                    dao.setChatroomnick(chatroomnick);
                    dao.setRoomflag(roomflag);
                    dao.setRoomowner(roomowner);
                    dao.setRoomdata(roomdataStr);
                    dao.setIsShowname(isShowname);
                    dao.setSelfDisplayName(selfDisplayName);
                    dao.setStyle(style);
                    dao.setChatroomdataflag(chatroomdataflag);
                    dao.setModifytime(modifytime);
                    dao.setChatroomnotice(chatroomnotice);
                    dao.setChatroomVersion(chatroomVersion);
                    dao.setChatroomnoticeEditor(chatroomnoticeEditor);
                    dao.setChatroomnoticePublishTime(chatroomnoticePublishTime);
                    dao.setChatroomLocalVersion(chatroomLocalVersion);


                    daoList.add(dao);
                    cr.moveToNext();
                }
            }
            cr.close();
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, "查询表chatroom异常，msg = " + e.getMessage());
        } finally {
            if (cr != null)
                cr.close();
        }


        return daoList;
    }

    public static ArrayList<Object> getRcontactDataInDB(SQLiteDatabase dataTarget) {
        Cursor cr = null;
        ArrayList<Object> daoList = new ArrayList<Object>();
        try {
             cr = dataTarget.rawQuery("select * from rcontact", null);
            if (cr.moveToFirst()) {
                MyLog.inputLogToFile(TAG, "rcontact 表准备上传数据条数= " + cr.getCount());

                for (int j = 0; j < cr.getCount(); j++) {

                    String username = CursorUtil.getString(cr, "username");
                    String alias = CursorUtil.getString(cr, "alias");
                    String conRemark = CursorUtil.getString(cr, "conRemark");
                    String domainList = CursorUtil.getString(cr, "domainList");
                    String nickname = CursorUtil.getString(cr, "nickname");
                    String pyInitial = CursorUtil.getString(cr, "pyInitial");
                    String quanPin = CursorUtil.getString(cr, "quanPin");
                    long showHead = CursorUtil.getLong(cr, "showHead");
                    long type = CursorUtil.getLong(cr, "type");
                    long weiboFlag = CursorUtil.getLong(cr, "weiboFlag");
                    String weiboNickname = CursorUtil.getString(cr, "weiboNickname");
                    String conRemarkPYFull = CursorUtil.getString(cr, "conRemarkPYFull");
                    String conRemarkPYShort = CursorUtil.getString(cr, "conRemarkPYShort");
                    byte[] lvbuff = CursorUtil.getBlob(cr, "lvbuff");
                    String lvbuffStr = new String(lvbuff, "UTF-8");

                    long verifyFlag = CursorUtil.getLong(cr, "verifyFlag");
                    String encryptUsername = CursorUtil.getString(cr, "encryptUsername");
                    long chatroomFlag = CursorUtil.getLong(cr, "chatroomFlag");
                    long deleteFlag = CursorUtil.getLong(cr, "deleteFlag");
                    String contactLabelIds = CursorUtil.getString(cr, "contactLabelIds");

                    RcontactDao dao = new RcontactDao();
                    dao.setUsername(username);
                    dao.setAlias(alias);
                    dao.setConRemark(conRemark);
                    dao.setDomainList(domainList);
                    dao.setNickname(nickname);
                    dao.setPyInitial(pyInitial);
                    dao.setQuanPin(quanPin);
                    dao.setShowHead(showHead);
                    dao.setType(type);
                    dao.setWeiboFlag(weiboFlag);
                    dao.setWeiboNickname(weiboNickname);
                    dao.setConRemarkPYFull(conRemarkPYFull);
                    dao.setConRemarkPYShort(conRemarkPYShort);
                    dao.setLvbuff(lvbuffStr);
                    dao.setVerifyFlag(verifyFlag);
                    dao.setEncryptUsername(encryptUsername);
                    dao.setChatroomFlag(chatroomFlag);
                    dao.setDeleteFlag(deleteFlag);
                    dao.setContactLabelIds(contactLabelIds);


                    daoList.add(dao);
                    cr.moveToNext();
                }
            }
            cr.close();
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, "查询表chatroom异常，msg = " + e.getMessage());
        } finally {
            if (cr != null)
                cr.close();
        }

        return daoList;
    }

    public static ArrayList<Object> getImgFlagDataInDB(SQLiteDatabase dataTarget) {
        Cursor cr = null;
        ArrayList<Object> daoList = new ArrayList<Object>();
        try {
            cr = dataTarget.rawQuery("select * from img_flag", null);
            if (cr.moveToFirst()) {
                for (int j = 0; j < cr.getCount(); j++) {

                    String username = CursorUtil.getString(cr, "username");
                    int imgflag = CursorUtil.getInt(cr, "imgflag");
                    int lastupdatetime = CursorUtil.getInt(cr, "lastupdatetime");
                    String reserved1 = CursorUtil.getString(cr, "reserved1");
                    String reserved2 = CursorUtil.getString(cr, "reserved2");
                    int reserved3 = CursorUtil.getInt(cr, "reserved3");
                    int reserved4 = CursorUtil.getInt(cr, "reserved4");

                    ImgFlagDao dao = new ImgFlagDao();
                    dao.setUsername(username);
                    dao.setImgflag(imgflag);
                    dao.setLastupdatetime(lastupdatetime);
                    dao.setReserved1(reserved1);
                    dao.setReserved2(reserved2);
                    dao.setReserved3(reserved3);
                    dao.setReserved4(reserved4);

                    daoList.add(dao);
                    cr.moveToNext();
                }
            }
            cr.close();
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, "查询表ImgFlag异常，msg = " + e.getMessage());
        } finally {
            if (cr != null)
                cr.close();
        }

        return daoList;
    }
  /*  public static String getUploadJsonStr(String tag,ArrayList<Object> dataList,String pathUin){
        if(tag == null || tag.equals("") || dataList == null || dataList.size() <= 0)return "";

        UploadDataDao uploadDataDao = new UploadDataDao();
        uploadDataDao.setUserUin(pathUin);
        uploadDataDao.setUserTag(tag);
        uploadDataDao.setData(dataList);
        Gson gson = new Gson();
        String json = gson.toJson(uploadDataDao);
        return json;
    }*/

    /**
     * 打包封装需要上传的数据
     **/
    public static String getUploadJsonStr(String tag, ArrayList<Object> dataList, String pathUin, String deviceID, String userName) {
        if (tag == null || tag.equals("") || dataList == null || dataList.size() <= 0) return "";
        UploadDataDao uploadDataDao = new UploadDataDao();
        uploadDataDao.setUserUin(pathUin);
        uploadDataDao.setUserTag(tag);
        uploadDataDao.setDeviceID(deviceID);
        uploadDataDao.setUserName(userName);
        uploadDataDao.setData(dataList);
        Gson gson = new GsonBuilder().serializeNulls().setDateFormat("yyyy-MM-dd HH:mm:ss").create();
        //Gson gson = new Gson();
        String json = gson.toJson(uploadDataDao);
        return json;
    }

    public static ArrayList<Object> getUserInfoDataInDB(SQLiteDatabase dataTarget) {
        Cursor cr = null;
        ArrayList<Object> daoList = new ArrayList<Object>();
        try {
            cr = dataTarget.rawQuery("select * from userinfo", null);
            if (cr.moveToFirst()) {
                MyLog.inputLogToFile(TAG, "userinfo 表准备上传数据条数= " + cr.getCount());
                for (int j = 0; j < cr.getCount(); j++) {

                    int id = CursorUtil.getInt(cr, "id");
                    int type = CursorUtil.getInt(cr, "type");
                    String value = CursorUtil.getString(cr, "value");

                    UserInfoDao dao = new UserInfoDao();
                    dao.setId(id);
                    dao.setType(type);
                    dao.setValue(value);

                    daoList.add(dao);
                    cr.moveToNext();
                }
            }
            cr.close();
        } catch (Exception e) {
            MyLog.inputLogToFile(TAG, "查询表ImgFlag异常，msg = " + e.getMessage());
        } finally {
            if (cr != null)
                cr.close();
        }


        return daoList;
    }

}
