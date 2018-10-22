package common;

import com.huawei.esdk.fusioncompute.local.ServiceFactory;
import com.huawei.esdk.fusioncompute.local.model.ClientProviderBean;
import com.huawei.esdk.fusioncompute.local.model.FCSDKResponse;
import com.huawei.esdk.fusioncompute.local.model.SDKCommonResp;
import com.huawei.esdk.fusioncompute.local.model.common.LoginResp;
import com.huawei.esdk.fusioncompute.local.model.monitor.QuerySysCurrentTimeResp;
import com.huawei.esdk.fusioncompute.local.resources.common.AuthenticateResource;
import com.huawei.esdk.fusioncompute.local.resources.monitor.MonitorResource;
import org.junit.Test;

import java.lang.management.MonitorInfo;

public class querySysCurrentTime {

    @Test
    public void gettime(){
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

        String siteUri = "/service/sites/4BAD086A";
        String scope = "urn:sites:4BAD086A:clusters:10";

        MonitorResource monitorResource = ServiceFactory.getService(MonitorResource.class,clientProvider);
        FCSDKResponse<QuerySysCurrentTimeResp> resptime = monitorResource.querySysCurrentTime(siteUri);

        System.out.println(resptime);

        SDKCommonResp sdkCommonResp = auth.logout();





    }
}
