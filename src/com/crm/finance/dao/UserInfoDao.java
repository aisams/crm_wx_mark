package com.crm.finance.dao;

/**
 * Created by Dipa on 2017/7/20.
 */

public class UserInfoDao {
    long id;
    int type;
    String value = "";

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }
}
