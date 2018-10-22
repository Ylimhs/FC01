package site;

import com.huawei.esdk.fusioncompute.local.ServiceFactory;
import com.huawei.esdk.fusioncompute.local.model.ClientProviderBean;
import com.huawei.esdk.fusioncompute.local.model.FCSDKResponse;
import com.huawei.esdk.fusioncompute.local.model.SDKCommonResp;
import com.huawei.esdk.fusioncompute.local.model.common.LoginResp;
import com.huawei.esdk.fusioncompute.local.model.site.SiteBasicInfo;
import com.huawei.esdk.fusioncompute.local.resources.common.AuthenticateResource;
import com.huawei.esdk.fusioncompute.local.resources.site.SiteResource;
import org.junit.Before;
import org.junit.Test;

import java.util.List;

public class test_site {




    @Test
    public void querySites(){

        //设定服务器配置
        ClientProviderBean clientProvider = new ClientProviderBean();

        //设定服务器配置_设定服务器IP
        clientProvider.setServerIp("192.168.5.185");

        //设定服务器配置_设定服务器端口号
        clientProvider.setServerPort("7443");

        //初始化用户资源实例
        AuthenticateResource auth = ServiceFactory.getService(AuthenticateResource.class, clientProvider);

        //以用户名，用户密码作为传入参数，调用AuthenticateResource提供的login方法，完成用户的登录
        FCSDKResponse<LoginResp> resp = auth.login("jiekou", "Huawei@123!");
        System.out.println(resp.getResult());

        System.out.println("---------------------------------");

        //获取SiteResource接口的实现
        SiteResource site = ServiceFactory.getService(SiteResource.class,clientProvider);
        FCSDKResponse<List<SiteBasicInfo>> resps = site.querySites();
        System.out.println(resps);

        //登出FC系统
        SDKCommonResp logout = auth.logout();

        /***
         * {
         * 	"sites": [{
         * 		"name": "site",
         * 		"status": "normal",
         * 		"ip": "192.168.5.185",
         * 		"uri": "/service/sites/4BAD086A",
         * 		"urn": "urn:sites:4BAD086A",
         * 		"isSelf": true,
         * 		"isDC": false
         *        }]
         * }
         */

    }







}
