package com.crm.finance.util;

import redis.clients.jedis.Jedis;

/**
 * Created by Dipa on 2018/1/3.
 */

public class JedisUtil {
    private static final String TAG = JedisUtil.class.getSimpleName();
    private static Jedis myJedis = null;
    public static Jedis getInit(){
            if(GlobalCofig.IS_OFFICIAL == 1){
                myJedis = new Jedis(GlobalCofig.REDIS_HOST_TEST, GlobalCofig.Port_TEST,GlobalCofig.TimeOut);
            }else{
                myJedis = new Jedis(GlobalCofig.REDIS_HOST, GlobalCofig.Port,GlobalCofig.TimeOut);
                myJedis.auth(GlobalCofig.REDIS_AUTH);
            }
        return  myJedis;
    }

}
