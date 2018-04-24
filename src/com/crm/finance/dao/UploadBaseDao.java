package com.crm.finance.dao;

/**
 * Created by Dipa on 2018/1/11.
 */

public class UploadBaseDao {

    /**
     * errcode : 1001
     * errmsg : Success
     */

    private int errcode;
    private String errmsg;

    public int getErrcode() {
        return errcode;
    }

    public void setErrcode(int errcode) {
        this.errcode = errcode;
    }

    public String getErrmsg() {
        return errmsg;
    }

    public void setErrmsg(String errmsg) {
        this.errmsg = errmsg;
    }
}
