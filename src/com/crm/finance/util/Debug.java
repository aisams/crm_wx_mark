package com.crm.finance.util;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.lang.Thread.UncaughtExceptionHandler;

/**
 * @author dipa
 *
 */
public class Debug {
    private static final String TAG = Debug.class.getSimpleName();

    public class DefaultExceptionHandler implements UncaughtExceptionHandler {

		// private UncaughtExceptionHandler defaultUEH;
		public DefaultExceptionHandler() {
			// this.defaultUEH = Thread.getDefaultUncaughtExceptionHandler();
		}

		public void uncaughtException(Thread t, Throwable e) {
			String info = genStackTrace(e);
			MyLog.e(t, info);
            LogInputUtil.e(TAG,"未捕获异常:"+info);
            MyLog.e(TAG,"未捕获异常:"+info);
         //   MobclickAgent.reportError(App.getApp(),"err:"+info );
        /*    android.os.Process.killProcess(android.os.Process.myPid());
            System.exit(10);*/
			// defaultUEH.uncaughtException(t, e);
		}
	}

	public DefaultExceptionHandler handler = new DefaultExceptionHandler();

	public void set() {
		//Thread.setDefaultUncaughtExceptionHandler(handler);

	}

	public static String genStackTrace(Throwable e) {
		Writer result = new StringWriter();
		PrintWriter printWriter = new PrintWriter(result);
		e.printStackTrace(printWriter);
		String stackTrace = result.toString();
		printWriter.close();
		return stackTrace;
	}

	public static String MName() {
		StackTraceElement stackTraceElements[] = (new Throwable())
				.getStackTrace();
		return stackTraceElements[1].toString();
	}

	public static Debug self = null;

	public static void threadInit() {
		if (null == self) {
			self = new Debug();
		}
		self.set();
	}
}
