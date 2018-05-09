package com.crm.finance.util.wxutil;

import com.crm.finance.dao.MessageDao;
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

public class WXFileUtil {

    public static String TAG = WXFileUtil.class.getSimpleName();

    //获取微信图片路径
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

        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator + imgNameTag + imgName;
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
        int size = messages.size();
        for (int i = 0; i < size; i++) {
            MessageDao dao = (MessageDao) messages.get(i);
            if (dao == null) continue;
            int type = dao.getType();
            String imagePath = dao.getImgPath();
            if (type == 3) {//类型3为图片，34为语音，1为文本
                String imgPath = WXFileUtil.getChatImgPath(wxFolderPath, imagePath);
                uploadWXImage(dao, imgPath);

                String localPath = WXFileUtil.getScrParetDir() + imgPath;
                deleteFile(localPath);//上传后，因为jpg为复制后的图片，故删除
            } else if (type == 34) {
                String voicePath = WXFileUtil.getChatVoicePath(wxFolderPath, imagePath);
                uploadWXVoice(dao, voicePath);
            }
        }
        return messages;
    }

    public static void deleteFile(String path){
        File file = new File(path);
        if(file.exists()){
            file.delete();
        }
    }
    //上传图片
    public static void uploadWXImage(final MessageDao dao, final String fileRelativePath) {
        if (dao == null || Utils.isEmpty(fileRelativePath)) return;

        String imageFuffix = ".jpg";
        String localPath = WXFileUtil.getScrParetDir() + fileRelativePath;

        String servicePath = fileRelativePath + imageFuffix;
        String localJPGPath = localPath + imageFuffix;

        if (FileUtil.isFileExists(localPath)) {
            FileUtil.copyFile(localPath, localJPGPath);
            if (FileUtil.isFileExists(localJPGPath)) {
                UploadManager.getInit().uploadFile(localJPGPath, servicePath, new BaseCallback() {
                    @Override
                    public void Succeed(Object obj) {
                        String jsonStr = (String) obj;

                        Gson gson = new Gson();
                        java.lang.reflect.Type type = new TypeToken<UploadFileDao>() {
                        }.getType();
                        UploadFileDao uploadFileDao = gson.fromJson(jsonStr, type);
                        if (uploadFileDao != null) {
                            String path = uploadFileDao.getData().getFileFullPath();
                            dao.setSrcPath(path);
                            MyLog.inputLogToFile(TAG, "图片上传成功，img原地址 = " + fileRelativePath + ",上传地址 = " + dao.getSrcPath());
                        }
                    }

                    @Override
                    public void Faild(Object obj) {
                        MyLog.inputLogToFile(TAG, "图片上传失败，img原地址 = " + fileRelativePath+",errMsg = "+obj);
                    }
                });
            }
        }
    }
    //上传语音
    public static void uploadWXVoice(final MessageDao dao, final String fileRelativePath) {
        if (dao == null || Utils.isEmpty(fileRelativePath)) return;
        String localVoicePath =WXFileUtil.getScrParetDir() + fileRelativePath;
        UploadManager.getInit().uploadFile(localVoicePath, fileRelativePath, new BaseCallback() {
            @Override
            public void Succeed(Object obj) {
                String jsonStr = (String) obj;

                Gson gson = new Gson();
                java.lang.reflect.Type type = new TypeToken<UploadFileDao>() {
                }.getType();
                UploadFileDao uploadFileDao = gson.fromJson(jsonStr, type);
                if (uploadFileDao != null) {
                    String path = uploadFileDao.getData().getFileFullPath();
                    dao.setSrcPath(path);
                    MyLog.inputLogToFile(TAG, "语音上传成功 voice原地址 = " + fileRelativePath + ",上传地址 = " + dao.getSrcPath());
                }
            }

            @Override
            public void Faild(Object obj) {
                MyLog.inputLogToFile(TAG, "语音上传失败 voice原地址 = " + fileRelativePath + ",errMsg = "+obj);
            }
        });
    }

}
