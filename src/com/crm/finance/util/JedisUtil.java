package com.crm.finance.util;

import redis.clients.jedis.Jedis;

/**
 * Created by Dipa on 2018/1/3.
 */

public class JedisUtil {
    private static final String TAG = JedisUtil.class.getSimpleName();
    private static Jedis myJedis = null;
    public static Jedis getInit(){
        if(myJedis == null){
            myJedis = new Jedis(GlobalCofig.REDIS_HOST, GlobalCofig.Port);
            //myJedis.auth(GlobalCofig.REDIS_AUTH);
            LogInputUtil.e(TAG,  "redis 连接成功，正在运行 = " + myJedis.ping());
        }
        return  myJedis;
    }
}
