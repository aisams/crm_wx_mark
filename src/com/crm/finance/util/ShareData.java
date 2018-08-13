package com.crm.finance.util;


import android.content.Context;
import android.content.SharedPreferences;

import com.marswin89.marsdaemon.MyApplication1;

import java.util.Set;

/**
 * 
 * 
 * @author Dipa
 * 
 */
public class ShareData {
	private final String SETTINGS_NAME = "SHARE";
	private static ShareData mShareData = new ShareData();
	public final byte[] _writeLock = new byte[0]; 
	
	public static final String LEAD_FIRST_LOGIN = "LEAD_FIRST_LOGIN";

	private ShareData() {

	}

	public static ShareData getInstance() {
		return mShareData;
	}
	
	
	public void  saveIntValue(Context context,String name ,int value)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return ;
			SharedPreferences settings =context
				.getSharedPreferences(SETTINGS_NAME, 0);
			settings.edit().putInt(name, value).commit();
		}
	}
	public int getIntValue(Context context,String name,int defaultValue)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return defaultValue;
			SharedPreferences settings = context
				.getSharedPreferences(SETTINGS_NAME, 0);
			return settings.getInt(name, defaultValue);
		}
	}
	public void  saveLongValue(Context context,String name ,long value)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return ;
			SharedPreferences settings = context
				.getSharedPreferences(SETTINGS_NAME, 0);
			settings.edit().putLong(name, value).commit();
		}
	}
	public long getLongValue(Context context,String name,long defaultValue)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return defaultValue;
			SharedPreferences settings =context
				.getSharedPreferences(SETTINGS_NAME, 0);
			return settings.getLong(name, defaultValue);
		}
	}
	public void  saveStringValue(Context context,String name ,String value)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return ;
			SharedPreferences settings = context
				.getSharedPreferences(SETTINGS_NAME, 0);
			settings.edit().putString(name, value).commit();
		}
	}
	public String getStringValue(Context context,String name,String defaultValue)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return defaultValue;
			SharedPreferences settings = context
				.getSharedPreferences(SETTINGS_NAME, 0);
			return settings.getString(name, defaultValue);
		}
	}
	public void  saveBooleanValue(String name ,Boolean value)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return ;
			SharedPreferences settings = MyApplication1.getApp()
				.getSharedPreferences(SETTINGS_NAME, 0);
			settings.edit().putBoolean(name, value).commit();
		}
	}
	public Set<String>  getStringSetValue(Context context,String name,Set<String> defaultValue)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return defaultValue;
			SharedPreferences settings = context
					.getSharedPreferences(SETTINGS_NAME, 0);
			return settings.getStringSet(name, defaultValue);
		}
	}
	public void  saveStringSetValue(String name ,Set<String> defaultValue)
	{
		synchronized (_writeLock) {
			if(name==null || name.equals(""))return ;
			SharedPreferences settings = MyApplication1.getApp()
					.getSharedPreferences(SETTINGS_NAME, 0);
			settings.edit().putStringSet(name, defaultValue).commit();
		}
	}
	public Boolean getBooleanValue(String name,Boolean defaultValue)
	{
		synchronized (_writeLock) {

			if(name==null || name.equals(""))return defaultValue;
			SharedPreferences settings = MyApplication1.getApp()
				.getSharedPreferences(SETTINGS_NAME, 0);
			return settings.getBoolean(name, defaultValue);
		}
	}
	
}
