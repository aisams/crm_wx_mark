package com.crm.finance.util;

import android.app.Application;
import android.content.Context;

import com.crm.finance.MainActivity;
import com.marswin89.marsdaemon.DaemonApplication;
import com.marswin89.marsdaemon.MyApplication1;


import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.text.SimpleDateFormat;
import java.util.Calendar;


/**
 * @author dipa
 * 
 */
public class MyLog {

	private static final String TAG = MyLog.class.getSimpleName();
	private static byte[] syncLock = new byte[0];
	private static final String LOG_STRIP = " ";
	private static final String LOG_FILE = "log";
	private static final String LOG_PATH = "crm_log";
	private static final String DOT = ".";
	private static String fullPath;
	private static int sequence;

	public static  boolean debug_level = GlobalCofig.LOG_NO_LOG;// false打印全日志，true不打日志

	private static void createFile(String name) {
		LogInputUtil.e(TAG,"createFile name ="+name);
		File file = new File(name);
		if (file.exists())
			return;
		try {
			file.createNewFile();
		} catch (IOException e) {
		}
	}

	public static void setInputLog(Boolean isNoLog){
		debug_level = isNoLog;
	}
	public static Boolean getInputLog(){
		return  debug_level;
	}

	public static String getSDLogPath() {
		DaemonApplication app = MyApplication1.getApp();

		File externalCacheDir = app.getExternalCacheDir();
//		File cacheDir = app.getCacheDir();
		String path = externalCacheDir.getPath();
		String s = path + File.separator + LOG_PATH;
		return s;
	}

	public static String getAppLogPath(String dir) {

		return dir + File.separator + LOG_PATH;
	}

	public static boolean testSDCard() {
		boolean flag = false;
		if (android.os.Environment.getExternalStorageState().equals(
				android.os.Environment.MEDIA_MOUNTED)) {
			flag = true;
		}
		return flag;
	}

	public static void init( String dir) {
		sequence = 0;

		if (testSDCard()) {
			String str = getSDLogPath();
			File file = new File(str);

			boolean flag = true;

			if (!file.exists()) {
				flag = file.mkdir();
			}
			try {
				long fielSize = getFileSizes(file);
				LogInputUtil.e(TAG,str+"文件目录大小："+fielSize);
				if(fielSize > 2097152  && file.isDirectory()){//10485760
					deleteDirectory(str);
					file.mkdir();
					LogInputUtil.e(TAG,"目录大了，清除");
				}


			} catch (Exception e) {
				e.printStackTrace();
				file.mkdir();
			}

			if (!flag) {
				LogInputUtil.e("error", "mkdir error");
			}
			boolean isInputFileLog = ShareData.getInstance().getBooleanValue(GlobalCofig.IS_INPUT_FILE_LOG,true);
			LogInputUtil.e(TAG,"是否输出日志 服务重启="+isInputFileLog);
			debug_level = isInputFileLog;
			if (!debug_level) {
				long runtime = Calendar.getInstance().getTimeInMillis();
				fullPath = str + File.separator + LOG_FILE + DOT + runtime
						+ ".txt";
			} else {
				fullPath = str + File.separator + LOG_PATH + ".txt";
			}
			createFile(fullPath);
		} else {
			String str = getAppLogPath(dir);
			File file = new File(str);
			file.mkdir();
			fullPath = str + File.separator + LOG_FILE;
			createFile(fullPath);
		}

    }
	private static long getFileSizes(File f) throws Exception
	{
		long size = 0;
		File flist[] = f.listFiles();
		for (int i = 0; i < flist.length; i++){
			if (flist[i].isDirectory()){
				size = size + getFileSizes(flist[i]);
			}
			else{
				size =size + getFileSize(flist[i]);
			}
		}
		return size;
	}
	private static long getFileSize(File file) throws Exception
	{
		long size = 0;
		if (file.exists()){
			FileInputStream fis = null;
			fis = new FileInputStream(file);
			size = fis.available();
		}
		else{
			file.createNewFile();
			LogInputUtil.e("获取文件大小","文件不存在!");
		}
		return size;
	}
	public static void v(Object obj, String info) {
		v(obj, info, false);
	}

	public static void e(Object obj, String info) {
		e(obj, info, false);
	}
	public static void inputLogToFile(Object obj, String info) {
		LogInputUtil.e((String)obj,info);
		e(obj, info, false);
	}
	public static void inputLogToFile(Object obj, String info,boolean isWriteLog) {
		LogInputUtil.e((String)obj,info);
		if(isWriteLog){
			e(obj, info, false);
		}
	}
	public static void i(Object obj, String info) {
		i(obj, info, false);
	}

	public static void d(Object obj, String info) {
		d(obj, info, false);
	}

	public static void w(Object obj, String info) {
		w(obj, info, false);
	}

	public static void v(String name, String info) {
		v(name, info, false);
	}

	public static void e(String name, String info) {
		e(name, info, false);
	}

	public static void i(String name, String info) {
		i(name, info, false);
	}

	public static void d(String name, String info) {
		d(name, info, false);
	}

	public static void w(String name, String info) {
		w(name, info, false);
	}

	public static void e(String name, Exception e) {
		e(name, e, false);
	}

	public static void w(String name, Exception e) {
		w(name, e, false);
	}

	public static void w(Object obj, Exception e) {
		w(obj, e, false);
	}


	public static void e(Object obj, Exception e) {
		e(obj, e, false);
	}
    //add test
    public static void testLoginLog(String e) {
        testLoginLog( e, false);
    }

	private static String catInfoE(String info, Throwable e, boolean flag) {

		StringBuilder sb = new StringBuilder();
		if (!flag) {
			sb.append(String.format("[seq=%08d] [ThreadID=%04d]", sequence++,
					Thread.currentThread().getId()));

			sb.append(LOG_STRIP);
		}
		sb.append(info);
		sb.append(LOG_STRIP);
		//sb.append(genStackTrace(e));
		return sb.toString();
	}

	public static String catInfo(boolean flag, Object obj) {
		StringBuilder sb = new StringBuilder();
		if (!flag) {
			sb.append(String.format("[seq=%08d] [ThreadID=%04d]", sequence++,
					Thread.currentThread().getId()));
			sb.append(LOG_STRIP);
		}
		sb.append(String.valueOf(obj)).append(LOG_STRIP);

		return sb.toString();
	}

	public static void v(Object obj, String info, boolean flag) {
		if (!flag && debug_level)
			return;
		info = catInfo(flag, info);
		android.util.Log.v(obj.getClass().getName(), info);
		MyLog.LogFile(-1, obj.getClass().getName() + LOG_STRIP + info);
	}

	public static void e(Object obj, String info, boolean flag) {
        if (!flag && debug_level)
			return;
		info = catInfoE(info, new Throwable(), flag);
		MyLog.LogFile( obj + " : " + info);
	}

	public static void i(Object obj, String info, boolean flag) {
		if (!flag && debug_level)
			return;
		info = catInfo(flag, info);
		LogInputUtil.i(obj.getClass().getName(), info);
		MyLog.LogFile(-1, obj.getClass().getName() + LOG_STRIP + info);
	}

	public static void d(Object obj, String info, boolean flag) {
		if (!flag && debug_level)
			return;
		info = catInfo(flag, info);
		MyLog.LogFile(-1, obj.getClass().getName() + LOG_STRIP + info);
	}

	public static void w(Object obj, String info, boolean flag) {
		if (!flag && debug_level)
			return;
		info = catInfo(flag, info);
		android.util.Log.w(obj.getClass().getName(), info);
		MyLog.LogFile(-1, obj.getClass().getName() + LOG_STRIP + info);
	}

	public static void v(String name, String info, boolean flag) {
		if (!flag && debug_level)
			return;
		info = catInfo(flag, info);
		android.util.Log.v(name, info);
		MyLog.LogFile(-1, name + LOG_STRIP + info);
	}

	public static void i(String name, String info, boolean flag) {
		if (!flag && debug_level)
			return;
		info = catInfo(flag, info);
		LogInputUtil.i(name, info);
		MyLog.LogFile(-1, name + LOG_STRIP + info);
	}

	public static void d(String name, String info, boolean flag) {
		if (!flag && debug_level)
			return;
		info = catInfo(flag, info);
		MyLog.LogFile(-1, name + LOG_STRIP + info);
	}

	public static void e(Object obj, Exception e, boolean flag) {
		if (!flag && debug_level)
			return;
		String info = genStackTrace(e);
		info = catInfo(flag, info);
		LogInputUtil.e(obj.getClass().getName(), info);
		MyLog.LogFile(-1, obj.getClass().getName() + LOG_STRIP + info);
	}
	public static String genStackTrace(Throwable e) {
		Writer result = new StringWriter();
		PrintWriter printWriter = new PrintWriter(result);
		e.printStackTrace(printWriter);
		String stackTrace = result.toString();
		printWriter.close();
		return stackTrace;
	}


	public static void e(String name, Exception e, boolean flag) {
		if (!flag && debug_level)
			return;
		String info = genStackTrace(e);
		info = catInfo(flag, info);
		LogInputUtil.e(name, info);
		MyLog.LogFile(-1, name + LOG_STRIP + info);
	}

	public static void w(String name, Exception e, boolean flag) {
		if (!flag && debug_level)
			return;
		String info = genStackTrace(e);
		info = catInfo(flag, info);
		android.util.Log.w(name, info);
		MyLog.LogFile(-1, name + LOG_STRIP + info);
	}

	public static void w(Object obj, Exception e, boolean flag) {
		if (!flag && debug_level)
			return;
		String info = genStackTrace(e);
		info = catInfo(flag, info);
		android.util.Log.w(obj.getClass().getName(), info);
		MyLog.LogFile(-1, obj.getClass().getName() + LOG_STRIP + info);
	}

	private static SimpleDateFormat dformat = new SimpleDateFormat(
			"yyyy-MM-dd HH:mm:ss SSS");

	private static void LogFile(int pos, String info) {
		if (!debug_level) {
			synchronized (MyLog.syncLock) {
				try {
					File file;
					if (pos < 0) {
						file = new File(fullPath);
					} else {
						file = new File(fullPath + DOT + pos);
					}
					FileOutputStream fos = new FileOutputStream(file, true);
					info = dformat.format(Calendar.getInstance()
							.getTimeInMillis()) + LOG_STRIP + info;
					fos.write(info.getBytes());
					fos.write('\n');
					fos.close();
				} catch (IOException ex) {
				}
			}
		}
	}

	public static void LogFile(String info) {
		if (!debug_level) {
			synchronized (MyLog.syncLock) {
				try {
					if(fullPath == null || fullPath.equals(""))return;
					File file = new File(fullPath);
					FileOutputStream fos = new FileOutputStream(file, true);
					info = dformat.format(Calendar.getInstance()
							.getTimeInMillis()) + LOG_STRIP + info;
					fos.write(info.getBytes());
					fos.write('\n');
					fos.close();
				} catch (IOException ex) {
				}
			}
		}
	}

    //add test
    public static void testLoginLog( String info, boolean flag) {
        info = "--------------------------------" + "\n" +info;
        if (!flag && debug_level)
            return;
        MyLog.LogFileTestLogin(-1, info);
    }

    private static void LogFileTestLogin(int pos, String info) {
        if (!debug_level) {
            synchronized (MyLog.syncLock) {
                try {
                    String path = getSDLogPath() + "/token_log.log";
                    File file;
                    if (pos < 0) {
                        file = new File(path);
                    } else {
                        file = new File(path + DOT + pos);
                    }
                    FileOutputStream fos = new FileOutputStream(file, true);
                    fos.write(info.getBytes());
                    fos.write('\n');
                    fos.close();
                } catch (IOException ex) {
                }
            }
        }
    }

	/**
	 * 删除单个文件
	 * @param   filePath    被删除文件的文件名
	 * @return 文件删除成功返回true，否则返回false
	 */
	public static boolean deleteFile(String filePath) {
		File file = new File(filePath);
		if (file.isFile() && file.exists()) {
			return file.delete();
		}
		return false;
	}

	/**
	 * 删除文件夹以及目录下的文件
	 * @param   filePath 被删除目录的文件路径
	 * @return  目录删除成功返回true，否则返回false
	 */
	public static boolean deleteDirectory(String filePath) {
		boolean flag = false;
		//如果filePath不以文件分隔符结尾，自动添加文件分隔符
		if (!filePath.endsWith(File.separator)) {
			filePath = filePath + File.separator;
		}
		File dirFile = new File(filePath);
		if (!dirFile.exists() || !dirFile.isDirectory()) {
			return false;
		}
		flag = true;
		File[] files = dirFile.listFiles();
		//遍历删除文件夹下的所有文件(包括子目录)
		for (int i = 0; i < files.length; i++) {
			if (files[i].isFile()) {
				//删除子文件
				flag = deleteFile(files[i].getAbsolutePath());
				if (!flag) break;
			} else {
				//删除子目录
				flag = deleteDirectory(files[i].getAbsolutePath());
				if (!flag) break;
			}
		}
		if (!flag) return false;
		//删除当前空目录
		return dirFile.delete();
	}

	/**
	 *  根据路径删除指定的目录或文件，无论存在与否
	 *@param filePath  要删除的目录或文件
	 *@return 删除成功返回 true，否则返回 false。
	 */
	public boolean DeleteFolder(String filePath) {
		File file = new File(filePath);
		if (!file.exists()) {
			return false;
		} else {
			if (file.isFile()) {
				// 为文件时调用删除文件方法
				return deleteFile(filePath);
			} else {
				// 为目录时调用删除目录方法
				return deleteDirectory(filePath);
			}
		}
	}

}
