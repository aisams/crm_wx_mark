package com.crm.finance;

import android.content.Context;
import android.widget.Toast;

import android.content.Intent;
import de.robv.android.xposed.IXposedHookLoadPackage;
import de.robv.android.xposed.XposedBridge;
import de.robv.android.xposed.callbacks.XC_LoadPackage;

/**
 * Created by zhy on 2017/5/18.
 */

public class crmplugin implements IXposedHookLoadPackage{
  static Context context;

  @Override public void handleLoadPackage(XC_LoadPackage.LoadPackageParam loadPackageParam) throws Throwable {
    //XposedBridge.log("loaded: " + loadPackageParam.packageName);
    Intent service=new Intent(context, GohnsonService.class);
    context.startService(service);
  }
}
