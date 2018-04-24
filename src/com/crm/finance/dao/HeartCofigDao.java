package com.crm.finance.dao;

import java.util.List;

/**
 * Created by Dipa on 2018/1/11.
 */
//获取心跳配置
public class HeartCofigDao extends UploadBaseDao {

    private List<DataBean> data;

    public List<DataBean> getData() {
        return data;
    }

    public void setData(List<DataBean> data) {
        this.data = data;
    }

    public static class DataBean {
        /**
         * upload : 1482663600000
         * heartbeat : 1515561761000
         */

        private long upload;
        private long heartbeat;

        public long getUpload() {
            return upload;
        }

        public void setUpload(long upload) {
            this.upload = upload;
        }

        public long getHeartbeat() {
            return heartbeat;
        }

        public void setHeartbeat(long heartbeat) {
            this.heartbeat = heartbeat;
        }
    }
}
