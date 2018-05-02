package com.crm.finance.util;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.io.Writer;
import java.lang.Thread.UncaughtExceptionHandler;

/**
 * @author dipa
 *
 */
public class Debug  implements UncaughtExceptionHandler{
    private static final String TAG = Debug.class.getSimpleName();

	@Override
	public void uncaughtException(Thread thread, Throwable throwable) {
		String info = genStackTrace(throwable);
		MyLog.inputLogToFile(TAG,"未捕获异常:"+info);
	}

	public void set() {
		Thread.setDefaultUncaughtExceptionHandler(this);

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
