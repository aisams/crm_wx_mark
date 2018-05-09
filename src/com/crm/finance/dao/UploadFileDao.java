package com.crm.finance.dao;

import java.io.Serializable;

/**
 * Created by Administrator on 2018/5/8 0008.
 */

public class UploadFileDao  implements Serializable {

    /**
     * errCode : 0
     * errMsg : 上传完成
     * data : {"fileFullPath":"https://file.tgw360.com/file-service/src/image/fdfc63658ec94cd3845d2d5d9627c076/image2/22/d8/th_22d821f2bd710610d2751df299ccbdef.jpg"}
     */

    private int errCode;
    private String errMsg;
    private DataBean data;

    public int getErrCode() {
        return errCode;
    }

    public void setErrCode(int errCode) {
        this.errCode = errCode;
    }

    public String getErrMsg() {
        return errMsg;
    }

    public void setErrMsg(String errMsg) {
        this.errMsg = errMsg;
    }

    public DataBean getData() {
        return data;
    }

    public void setData(DataBean data) {
        this.data = data;
    }

    public static class DataBean {
        /**
         * fileFullPath : https://file.tgw360.com/file-service/src/image/fdfc63658ec94cd3845d2d5d9627c076/image2/22/d8/th_22d821f2bd710610d2751df299ccbdef.jpg
         */

        private String fileFullPath;

        public String getFileFullPath() {
            return fileFullPath;
        }

        public void setFileFullPath(String fileFullPath) {
            this.fileFullPath = fileFullPath;
        }
    }
}
