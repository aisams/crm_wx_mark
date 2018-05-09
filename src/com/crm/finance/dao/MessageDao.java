package com.crm.finance.dao;

import com.crm.finance.util.CursorUtil;

/**
 * Created by Dipa on 2017/7/17.
 */

public class MessageDao {
    long msgId;
    long msgSvrId;
    int type;
    int status;
    int isSend;
    long isShowTimer;
    long createTime;
    String talker = "";
    String content = "";
    String imgPath = "";
    String reserved = "";
    String transContent = "";
    String transBrandWording = "";
    long talkerId;
    String bizClientMsgId = "";
    long bizChatId;
    String bizChatUserId = "";
    long msgSeq;
    int flag;
    String srcPath = "";

    public String getSrcPath() {
        return srcPath;
    }

    public void setSrcPath(String srcPath) {
        this.srcPath = srcPath;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public int getIsSend() {
        return isSend;
    }

    public void setIsSend(int isSend) {
        this.isSend = isSend;
    }

    public String getTalker() {
        return talker;
    }

    public void setTalker(String talker) {
        this.talker = talker;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImgPath() {
        return imgPath;
    }

    public void setImgPath(String imgPath) {
        this.imgPath = imgPath;
    }

    public String getReserved() {
        return reserved;
    }

    public void setReserved(String reserved) {
        this.reserved = reserved;
    }

    public String getTransContent() {
        return transContent;
    }

    public void setTransContent(String transContent) {
        this.transContent = transContent;
    }

    public String getTransBrandWording() {
        return transBrandWording;
    }

    public void setTransBrandWording(String transBrandWording) {
        this.transBrandWording = transBrandWording;
    }

    public String getBizClientMsgId() {
        return bizClientMsgId;
    }

    public void setBizClientMsgId(String bizClientMsgId) {
        this.bizClientMsgId = bizClientMsgId;
    }

    public String getBizChatUserId() {
        return bizChatUserId;
    }

    public void setBizChatUserId(String bizChatUserId) {
        this.bizChatUserId = bizChatUserId;
    }

    public int getFlag() {
        return flag;
    }

    public void setFlag(int flag) {
        this.flag = flag;
    }

    public long getMsgId() {
        return msgId;
    }

    public void setMsgId(long msgId) {
        this.msgId = msgId;
    }

    public long getMsgSvrId() {
        return msgSvrId;
    }

    public void setMsgSvrId(long msgSvrId) {
        this.msgSvrId = msgSvrId;
    }

    public long getIsShowTimer() {
        return isShowTimer;
    }

    public void setIsShowTimer(long isShowTimer) {
        this.isShowTimer = isShowTimer;
    }

    public long getCreateTime() {
        return createTime;
    }

    public void setCreateTime(long createTime) {
        this.createTime = createTime;
    }

    public long getTalkerId() {
        return talkerId;
    }

    public void setTalkerId(long talkerId) {
        this.talkerId = talkerId;
    }

    public long getBizChatId() {
        return bizChatId;
    }

    public void setBizChatId(long bizChatId) {
        this.bizChatId = bizChatId;
    }

    public long getMsgSeq() {
        return msgSeq;
    }

    public void setMsgSeq(long msgSeq) {
        this.msgSeq = msgSeq;
    }
}
