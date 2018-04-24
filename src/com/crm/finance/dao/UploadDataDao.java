package com.crm.finance.dao;

import java.util.ArrayList;

/**
 * Created by Dipa on 2017/7/23.
 */
//封装上传的数据包结构
public class UploadDataDao {
    public String userTag = "";
    public String userUin = "";
    public String deviceID = "";
    public String empUserName="";

    public ArrayList<Object> data = new ArrayList<Object>();

    public String getUserTag() {
        return userTag;
    }

    public void setUserTag(String userTag) {
        this.userTag = userTag;
    }

    public ArrayList<Object> getData() {
        return data;
    }

    public void setData(ArrayList<Object> data) {
        this.data = data;
    }

    public String getUserUin() {
        return userUin;
    }

    public void setUserUin(String userUin) {
        this.userUin = userUin;
    }

    public String getDeviceID() {
        return deviceID;
    }

    public void setDeviceID(String deviceID) {
        this.deviceID = deviceID;
    }
    public void setUserName(String userName){this.empUserName=userName;}
    public String getUserName(){return this.empUserName;}
}
