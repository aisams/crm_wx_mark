package com.crm.finance.util.wxutil;

import com.crm.finance.dao.ImgFlagDao;
import com.crm.finance.dao.MessageDao;
import com.crm.finance.dao.RcontactDao;
import com.crm.finance.dao.UploadFileDao;
import com.crm.finance.util.LogInputUtil;
import com.crm.finance.util.MyLog;
import com.crm.finance.util.UploadManager;
import com.crm.finance.util.Utils;
import com.crm.finance.util.callback.BaseCallback;
import com.crm.finance.util.fileutil.FileUtil;
import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;

import java.io.File;
import java.util.ArrayList;


/**
 * Created by Administrator on 2018/5/8 0008.
 */

public class WXBusinessUtil {
    public static final String WX_IMG_DIR = "wx_mark_img";
    public static final String WX_VOICE_DIR = "wx_mark_voice";
    public static String TAG = WXBusinessUtil.class.getSimpleName();

    //获取微信图片路径,type 0小图，1中图，2原图
    public static String getChatImgPath(String fileDir, String path) {
        // String fileStrPath = "THUMBNAIL_DIRPATH://th_22532b0106240cb8d000550eb82b0d32";
        String fileStrPath = "";
        if (Utils.isEmpty(fileDir) || Utils.isEmpty(path)) return fileStrPath;

        String imgName = path;

        String imgNameTag = "th_";
        String dir = "";
        String dir2 = "";
        try {
            int imgNameIndex = path.indexOf(imgNameTag);
            if (imgNameIndex >= 0) {
                imgName = path.substring(imgNameIndex + 3);//排除th_
            }

            dir = imgName.substring(0, 2);
            dir2 = imgName.substring(2, 4);
        } catch (Exception e) {
            LogInputUtil.e(TAG, e.getLocalizedMessage());
            return fileStrPath;
        }

        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator  + imgName+".png";//原图
        if(new File(WXBusinessUtil.getScrParetDir()+fileStrPath).exists()){
            return fileStrPath;
        }
        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator  + imgName+".jpg";//原图
        if(new File(WXBusinessUtil.getScrParetDir()+fileStrPath).exists()){
            return fileStrPath;
        }
        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator + imgNameTag + imgName+"hd";//中缩略图
        if(new File(WXBusinessUtil.getScrParetDir()+fileStrPath).exists()){
            return fileStrPath;
        }
        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator + imgNameTag + imgName;//小缩略图
        if(new File(WXBusinessUtil.getScrParetDir() + fileStrPath).exists()){
            return fileStrPath;
        }
        return fileStrPath;
    }
    //获取微信语音路径
    public static String getChatVoicePath(String fileDir, String path) {
        //String path = "1520580502180e10148b10a100";
        String fileStrPath = "";
        if (Utils.isEmpty(fileDir) || Utils.isEmpty(path)) return fileStrPath;

        String voiceMD5 = Utils.getMd5Value(path);
        String dir = "";
        String dir2 = "";
        try {
            dir = voiceMD5.substring(0, 2);
            dir2 = voiceMD5.substring(2, 4);
        } catch (Exception e) {
            LogInputUtil.e(TAG, e.getLocalizedMessage());
            return fileStrPath;
        }
        fileStrPath = fileDir + File.separator + "voice2" + File.separator + dir + File.separator + dir2 + File.separator + "msg_" + path + ".amr";
        return fileStrPath;
    }

    public static String getScrParetDir() {
        String fileStr = FileUtil.getAppExternalPath() + File.separator + "tencent" + File.separator + "MicroMsg" + File.separator;
        return fileStr;
    }

    //添加语音和图片路径
    public static ArrayList<Object> addSrcPath(String wxFolderPath, ArrayList<Object> messages) {
        if(messages == null)return messages;
        int size = messages.size();
        long sumFileSize = 0;
        long currentTime = System.currentTimeMillis();

        for (int i = 0; i < size; i++) {
            MessageDao dao = (MessageDao) messages.get(i);
            if (dao == null) continue;
            int type = dao.getType();
            String imagePath = dao.getImgPath();
            if (type == 3) {//类型3为图片，34为语音，1为文本
                String imgPath = WXBusinessUtil.getChatImgPath(wxFolderPath, imagePath);
                uploadWXImage(dao, imgPath,i);
            } else if (type == 34) {
                String voicePath = WXBusinessUtil.getChatVoicePath(wxFolderPath, imagePath);
                uploadWXVoice(dao, voicePath);
            }
            sumFileSize = sumFileSize + dao.getFileSize();
        }
        long lastTime = System.currentTimeMillis();
        long intervalTime = (lastTime - currentTime)/1000;
        MyLog.inputLogToFile(TAG,"本次上传文件总大小 "+sumFileSize+" KB,耗时 "+intervalTime +" 秒");
        return messages;
    }

    public static void deleteFile(String path){
        File file = new File(path);
        if(file.exists()){
            file.delete();
        }
    }
    //上传图片,inputLogint 减少日志输出
    public static void uploadWXImage(final MessageDao dao, final String fileRelativePath, final int inputLogint) {
        if (dao == null || Utils.isEmpty(fileRelativePath)) return;

        String imageFuffix =".jpg";
        String localPath = WXBusinessUtil.getScrParetDir() + fileRelativePath;

        String servicePath =WX_IMG_DIR +File.separator+ fileRelativePath ;
        if(!isHaveImgFuffix(servicePath)){
            servicePath = servicePath + imageFuffix;
        }

        boolean localFileIsExists = FileUtil.isFileExists(localPath);
        final Long fileSize = FileUtil.getFileSize(localPath);
        LogInputUtil.e(TAG,"源图片地址 = "+localPath +", 地址是否存在 = "+localFileIsExists+",文件大小 = "+fileSize+" kb,待上传服务器地址 ="+servicePath);
        if (localFileIsExists) {
                UploadManager.getInit().uploadFile(localPath, servicePath, new BaseCallback() {
                    @Override
                    public void Succeed(Object obj) {
                        String jsonStr = (String) obj;
                        LogInputUtil.e(TAG,"图片上传回调的json = "+jsonStr);
                        Gson gson = new Gson();
                        java.lang.reflect.Type type = new TypeToken<UploadFileDao>() {
                        }.getType();
                        UploadFileDao uploadFileDao = gson.fromJson(jsonStr, type);
                        if (uploadFileDao != null) {
                            UploadFileDao.DataBean beam = uploadFileDao.getData();
                            if(beam != null){
                                String path = beam.getFileFullPath();
                                dao.setSrcPath(path);
                                dao.setFileSize(fileSize);
                            }
                            if(inputLogint % 30 == 0){
                                MyLog.inputLogToFile(TAG, "图片上传成功，img原地址 = " + fileRelativePath + ",上传地址 = " + dao.getSrcPath()+",inputLogint = "+inputLogint+",fileSize = "+fileSize);
                            }
                        }else{
                            MyLog.inputLogToFile(TAG, "图片上传失败，img原地址 = " + fileRelativePath+",errMsg = "+obj);

                        }
                    }

                    @Override
                    public void Faild(Object obj) {
                        MyLog.inputLogToFile(TAG, "图片上传失败，img原地址 = " + fileRelativePath+",errMsg = "+obj);
                    }
                });

        }
    }
    //是否是jpg 或 png后缀
    public static boolean isHaveImgFuffix(String imgPath){
        if(Utils.isEmpty(imgPath))return false;
        boolean isHaveFuffix  = imgPath.endsWith(".jpg") || imgPath.endsWith(".png");
        return isHaveFuffix;
    }
    //上传语音
    public static void uploadWXVoice(final MessageDao dao, final String fileRelativePath) {
        if (dao == null || Utils.isEmpty(fileRelativePath)) return;
        String localVoicePath = WXBusinessUtil.getScrParetDir() + fileRelativePath;
        String serviceFilePath =WX_VOICE_DIR + File.separator +fileRelativePath;
        boolean localFileIsExists = FileUtil.isFileExists(localVoicePath);

        LogInputUtil.e(TAG,"待上传源语音地址 = "+localVoicePath +", 语音是否存在 = "+localFileIsExists+",待上传服务器地址 ="+serviceFilePath);
        final Long fileSize = FileUtil.getFileSize(localVoicePath);
        UploadManager.getInit().uploadFile(localVoicePath, serviceFilePath, new BaseCallback() {
            @Override
            public void Succeed(Object obj) {
                String jsonStr = (String) obj;
                LogInputUtil.e(TAG,"语音上传回调的json = "+jsonStr);

                Gson gson = new Gson();
                java.lang.reflect.Type type = new TypeToken<UploadFileDao>() {
                }.getType();
                UploadFileDao uploadFileDao = gson.fromJson(jsonStr, type);
                if (uploadFileDao != null) {
                    UploadFileDao.DataBean beam = uploadFileDao.getData();
                    if(beam != null){
                        String path = beam.getFileFullPath();
                        dao.setSrcPath(path);
                        dao.setFileSize(fileSize);
                    }
                    MyLog.inputLogToFile(TAG, "语音上传成功 voice原地址 = " + fileRelativePath + ",上传地址 = " + dao.getSrcPath());
                }
            }

            @Override
            public void Faild(Object obj) {
                MyLog.inputLogToFile(TAG, "语音上传失败 voice原地址 = " + fileRelativePath + ",errMsg = "+obj);
            }
        });
    }

    /**
     *设备好友头像
     * @param rcontacts 好友例表
     * @param imgFlags 图片例表
     */
    public static  void setFriendHeadImg(ArrayList<Object> rcontacts,ArrayList<Object> imgFlags){
        for (int i = 0; i < rcontacts.size(); i++) {
            RcontactDao rcontactDao = (RcontactDao) rcontacts.get(i);
            for (int j = 0; j < imgFlags.size(); j++) {
                //获取微信好友的头像信息
                ImgFlagDao imgFlagDao = (ImgFlagDao) imgFlags.get(j);
                if (imgFlagDao.getUsername().equals(rcontactDao.getUsername())) {
                    //Log.e(TAG,  rcontactDao.getUsername()+"==》"+imgFlagDao.getUsername()+":"+imgFlagDao.getReserved2());
                    rcontactDao.setSmallHeadImgUrl(imgFlagDao.getReserved2());//绑定小头像（注：getReserved1()为大头像）
                    rcontactDao.setBigHeadImgUrl(imgFlagDao.getReserved1());
                    break;
                }
            }
        }
    }
}
