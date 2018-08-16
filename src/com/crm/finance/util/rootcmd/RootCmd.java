package com.crm.finance.util.rootcmd;

import com.crm.finance.util.LogInputUtil;
import com.crm.finance.util.MyLog;

import java.io.BufferedReader;
import java.io.DataInputStream;
import java.io.DataOutputStream;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;

/**
 * Created by Administrator on 2018/8/15 0015.
 */

public class RootCmd {
    public final static String TAG = RootCmd.class.getSimpleName();

    // 执行linux命令并且输出结果

    protected static String execRootCmd(String paramString) {

        String result = "result : ";

        try {

            Process localProcess = Runtime.getRuntime().exec("su ");// 经过Root处理的android系统即有su命令

            OutputStream localOutputStream = localProcess.getOutputStream();

            DataOutputStream localDataOutputStream = new DataOutputStream(

                    localOutputStream);

            InputStream localInputStream = localProcess.getInputStream();

            DataInputStream localDataInputStream = new DataInputStream(

                    localInputStream);

            String str1 = String.valueOf(paramString);

            String str2 = str1 + "\n";

            localDataOutputStream.writeBytes(str2);

            localDataOutputStream.flush();

            String str3 = null;

//            while ((str3 = localDataInputStream.readLine()) != null) {

//                Log.d("result", str3);

//            }

            localDataOutputStream.writeBytes("exit\n");

            localDataOutputStream.flush();

            localProcess.waitFor();

            return result;

        } catch (Exception localException) {

            localException.printStackTrace();

            return result;

        }

    }


    // 执行linux命令但不关注结果输出

    public static int execRootCmdSilent(String paramString) {

        try {

            Process localProcess = Runtime.getRuntime().exec("su");

            Object localObject = localProcess.getOutputStream();

            DataOutputStream localDataOutputStream = new DataOutputStream(

                    (OutputStream) localObject);

            String str = String.valueOf(paramString);

            localObject = str + "\n";

            localDataOutputStream.writeBytes((String) localObject);

            localDataOutputStream.flush();

            localDataOutputStream.writeBytes("exit\n");

            localDataOutputStream.flush();

            localProcess.waitFor();

            int result = localProcess.exitValue();
            return (Integer) result;

        } catch (Exception localException) {
            MyLog.e(TAG,"执行adb异常 execRootCmdSilent："+localException.getLocalizedMessage());
            return -1;

        }

    }


    // 判断机器Android是否已经root，即是否获取root权限

    public static boolean haveRoot() {


        int i = execRootCmdSilent("echo test"); // 通过执行测试命令来检测
        LogInputUtil.e(TAG,"返回是否有root = "+i);
        if (i != -1) {

            return true;

        }

        return false;

    }


}
