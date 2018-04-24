package com.crm.finance.dao;

/**
 * Created by Dipa on 2017/7/20.
 */

public class ChatRoomDao {
    String chatroomname = "";
    long addtime ;
    String memberlist = "";
    String displayname = "";
    String chatroomnick = "";
    long roomflag;
    String roomowner = "";
    String roomdata = "";
    long isShowname;
    String selfDisplayName = "";
    long style;
    long chatroomdataflag;
    long modifytime;
    String chatroomnotice = "";
    long chatroomVersion ;
    String chatroomnoticeEditor = "";
    long chatroomnoticePublishTime;
    long chatroomLocalVersion;

    public String getChatroomname() {
        return chatroomname;
    }

    public void setChatroomname(String chatroomname) {
        this.chatroomname = chatroomname;
    }

    public long getAddtime() {
        return addtime;
    }

    public void setAddtime(long addtime) {
        this.addtime = addtime;
    }

    public String getMemberlist() {
        return memberlist;
    }

    public void setMemberlist(String memberlist) {
        this.memberlist = memberlist;
    }

    public String getDisplayname() {
        return displayname;
    }

    public void setDisplayname(String displayname) {
        this.displayname = displayname;
    }

    public String getChatroomnick() {
        return chatroomnick;
    }

    public void setChatroomnick(String chatroomnick) {
        this.chatroomnick = chatroomnick;
    }

    public long getRoomflag() {
        return roomflag;
    }

    public void setRoomflag(long roomflag) {
        this.roomflag = roomflag;
    }

    public String getRoomowner() {
        return roomowner;
    }

    public void setRoomowner(String roomowner) {
        this.roomowner = roomowner;
    }

    public String getRoomdata() {
        return roomdata;
    }

    public void setRoomdata(String roomdata) {
        this.roomdata = roomdata;
    }

    public long getIsShowname() {
        return isShowname;
    }

    public void setIsShowname(long isShowname) {
        this.isShowname = isShowname;
    }

    public String getSelfDisplayName() {
        return selfDisplayName;
    }

    public void setSelfDisplayName(String selfDisplayName) {
        this.selfDisplayName = selfDisplayName;
    }

    public long getStyle() {
        return style;
    }

    public void setStyle(long style) {
        this.style = style;
    }

    public long getChatroomdataflag() {
        return chatroomdataflag;
    }

    public void setChatroomdataflag(long chatroomdataflag) {
        this.chatroomdataflag = chatroomdataflag;
    }

    public long getModifytime() {
        return modifytime;
    }

    public void setModifytime(long modifytime) {
        this.modifytime = modifytime;
    }

    public String getChatroomnotice() {
        return chatroomnotice;
    }

    public void setChatroomnotice(String chatroomnotice) {
        this.chatroomnotice = chatroomnotice;
    }

    public long getChatroomVersion() {
        return chatroomVersion;
    }

    public void setChatroomVersion(long chatroomVersion) {
        this.chatroomVersion = chatroomVersion;
    }

    public String getChatroomnoticeEditor() {
        return chatroomnoticeEditor;
    }

    public void setChatroomnoticeEditor(String chatroomnoticeEditor) {
        this.chatroomnoticeEditor = chatroomnoticeEditor;
    }

    public long getChatroomnoticePublishTime() {
        return chatroomnoticePublishTime;
    }

    public void setChatroomnoticePublishTime(long chatroomnoticePublishTime) {
        this.chatroomnoticePublishTime = chatroomnoticePublishTime;
    }

    public long getChatroomLocalVersion() {
        return chatroomLocalVersion;
    }

    public void setChatroomLocalVersion(long chatroomLocalVersion) {
        this.chatroomLocalVersion = chatroomLocalVersion;
    }
}
