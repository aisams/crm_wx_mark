package com.crm.finance.util.wxutil;

import android.provider.MediaStore;

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

import org.apache.cordova.file.FileUtils;

import java.io.File;
import java.util.ArrayList;


/**
 * Created by Administrator on 2018/5/8 0008.
 */

public class WXFileUtil {
    public static final String WX_IMG_DIR = "wx_mark_img";
    public static final String WX_VOICE_DIR = "wx_mark_voice";
    public static String TAG = WXFileUtil.class.getSimpleName();

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

       // fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator + imgNameTag + imgName;
        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator  + imgName+".png";
        if(new File(WXFileUtil.getScrParetDir()+fileStrPath).exists()){
            return fileStrPath;
        }
        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator  + imgName+".jpg";
        if(new File(WXFileUtil.getScrParetDir()+fileStrPath).exists()){
            return fileStrPath;
        }
        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator + imgNameTag + imgName+"hd";
        if(new File(WXFileUtil.getScrParetDir()+fileStrPath).exists()){
            return fileStrPath;
        }
        fileStrPath = fileDir + File.separator + "image2" + File.separator + dir + File.separator + dir2 + File.separator + imgNameTag + imgName;
        if(new File(WXFileUtil.getScrParetDir() + fileStrPath).exists()){
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
        int size = messages.size();
        for (int i = 0; i < size; i++) {
            MessageDao dao = (MessageDao) messages.get(i);
            if (dao == null) continue;
            int type = dao.getType();
            String imagePath = dao.getImgPath();
            if (type == 3) {//类型3为图片，34为语音，1为文本
                String imgPath = WXFileUtil.getChatImgPath(wxFolderPath, imagePath);
                uploadWXImage(dao, imgPath,i);

               /* String localPath = WXFileUtil.getScrParetDir() + imgPath;
                if(!WXFileUtil.isHaveImgFuffix(localPath)){
                    deleteFile(localPath+".jpg");//上传后，因为jpg为复制后的图片，故删除
                }*/
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
    //上传图片,inputLogint 减少日志输出
    public static void uploadWXImage(final MessageDao dao, final String fileRelativePath, final int inputLogint) {
        if (dao == null || Utils.isEmpty(fileRelativePath)) return;

        String imageFuffix =".jpg";
        String localPath = WXFileUtil.getScrParetDir() + fileRelativePath;

        String servicePath =WX_IMG_DIR +File.separator+ fileRelativePath ;
        if(!isHaveImgFuffix(servicePath)){
            servicePath = servicePath + imageFuffix;
        }

        String localJPGPath = localPath;
      /*  if(!isHaveImgFuffix(localJPGPath)){//若本地路径无后缀，加上后缀再上传，文件服务器不支持无后缀文件上传
            localJPGPath = localJPGPath + imageFuffix;
        }*/
        boolean localFileIsExists = FileUtil.isFileExists(localPath);
        LogInputUtil.e(TAG,"源图片地址 = "+localPath +", 地址是否存在 = "+localFileIsExists+",待上传服务器地址 ="+servicePath);
        if (localFileIsExists) {
//            if(!localPath.endsWith(localJPGPath)){
//                FileUtil.copyFile(localPath, localJPGPath);
//            }
           // if (!FileUtil.isFileExists(localJPGPath)) return;
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
                            }
                            if(inputLogint % 20 == 0){
                                MyLog.inputLogToFile(TAG, "图片上传成功，img原地址 = " + fileRelativePath + ",上传地址 = " + dao.getSrcPath()+",inputLogint = "+inputLogint);
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
        String localVoicePath =WXFileUtil.getScrParetDir() + fileRelativePath;
        String serviceFilePath =WX_VOICE_DIR + File.separator +fileRelativePath;
        boolean localFileIsExists = FileUtil.isFileExists(localVoicePath);

        LogInputUtil.e(TAG,"待上传源语音地址 = "+localVoicePath +", 语音是否存在 = "+localFileIsExists+",待上传服务器地址 ="+serviceFilePath);
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

}
