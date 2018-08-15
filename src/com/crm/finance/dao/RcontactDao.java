package com.crm.finance.dao;

/**
 * Created by Dipa on 2017/7/20.
 */

public class RcontactDao {
    String username = "";
    String alias = "";
    String conRemark = "";
    String domainList = "";
    String nickname = "";
    String pyInitial = "";
    String quanPin = "";
    long showHead ;
    long type;
    long weiboFlag;
    String weiboNickname = "";
    String conRemarkPYFull = "";
    String conRemarkPYShort = "";
    String lvbuff = "";
    long verifyFlag;
    String encryptUsername = "";
    long chatroomFlag;
    long deleteFlag;
    String contactLabelIds;
    String smallheadimgurl="";
    String bigheadimgurl="";


    public void setSmallHeadImgUrl(String smallheadimgurl){this.smallheadimgurl=smallheadimgurl;}
    public String getSmallHeadImgUrl(){return this.smallheadimgurl;}

    public void setBigHeadImgUrl(String bigheadimgurl){this.bigheadimgurl=bigheadimgurl;}
    public String getBigHeadImgUrl(){return this.bigheadimgurl;}

    public String getUsername() {
        if(username == null){
            username = "";
        }
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    public String getConRemark() {
        if(conRemark == null){
            conRemark = "";
        }
        return conRemark;
    }

    public void setConRemark(String conRemark) {
        this.conRemark = conRemark;
    }

    public String getDomainList() {
        return domainList;
    }

    public void setDomainList(String domainList) {
        this.domainList = domainList;
    }

    public String getNickname() {
        if(nickname == null){
            nickname = "";
        }
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    public String getPyInitial() {
        return pyInitial;
    }

    public void setPyInitial(String pyInitial) {
        this.pyInitial = pyInitial;
    }

    public String getQuanPin() {
        return quanPin;
    }

    public void setQuanPin(String quanPin) {
        this.quanPin = quanPin;
    }

    public long getShowHead() {
        return showHead;
    }

    public void setShowHead(long showHead) {
        this.showHead = showHead;
    }

    public long getType() {
        return type;
    }

    public void setType(long type) {
        this.type = type;
    }

    public long getWeiboFlag() {
        return weiboFlag;
    }

    public void setWeiboFlag(long weiboFlag) {
        this.weiboFlag = weiboFlag;
    }

    public String getWeiboNickname() {
        return weiboNickname;
    }

    public void setWeiboNickname(String weiboNickname) {
        this.weiboNickname = weiboNickname;
    }

    public String getConRemarkPYFull() {
        return conRemarkPYFull;
    }

    public void setConRemarkPYFull(String conRemarkPYFull) {
        this.conRemarkPYFull = conRemarkPYFull;
    }

    public String getConRemarkPYShort() {
        return conRemarkPYShort;
    }

    public void setConRemarkPYShort(String conRemarkPYShort) {
        this.conRemarkPYShort = conRemarkPYShort;
    }

    public String getLvbuff() {
        return lvbuff;
    }

    public void setLvbuff(String lvbuff) {
        this.lvbuff = lvbuff;
    }

    public long getVerifyFlag() {
        return verifyFlag;
    }

    public void setVerifyFlag(long verifyFlag) {
        this.verifyFlag = verifyFlag;
    }

    public String getEncryptUsername() {
        return encryptUsername;
    }

    public void setEncryptUsername(String encryptUsername) {
        this.encryptUsername = encryptUsername;
    }

    public long getChatroomFlag() {
        return chatroomFlag;
    }

    public void setChatroomFlag(long chatroomFlag) {
        this.chatroomFlag = chatroomFlag;
    }

    public long getDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(long deleteFlag) {
        this.deleteFlag = deleteFlag;
    }

    public String getContactLabelIds() {
        return contactLabelIds;
    }

    public void setContactLabelIds(String contactLabelIds) {
        this.contactLabelIds = contactLabelIds;
    }
}
