package vm;

import com.huawei.esdk.fusioncompute.local.ServiceFactory;
import com.huawei.esdk.fusioncompute.local.model.ClientProviderBean;
import com.huawei.esdk.fusioncompute.local.model.FCSDKResponse;
import com.huawei.esdk.fusioncompute.local.model.PageList;
import com.huawei.esdk.fusioncompute.local.model.SDKCommonResp;
import com.huawei.esdk.fusioncompute.local.model.common.LoginResp;
import com.huawei.esdk.fusioncompute.local.model.vm.QueryVmsReq;
import com.huawei.esdk.fusioncompute.local.model.vm.VmInfo;
import com.huawei.esdk.fusioncompute.local.resources.common.AuthenticateResource;
import com.huawei.esdk.fusioncompute.local.resources.vm.VmResource;
import org.junit.Test;

public class queryVMs {

    
    // 获取虚拟机信息

    /**
     * {
     * 	"total": 2,
     * 	"vms": [{
     * 		"name": "test-linux01",
     * 		"location": "urn:sites:4BAD086A:clusters:10",
     * 		"hostName": "linux-IcjKyx",
     * 		"description": null,
     * 		"group": null,
     * 		"status": "running",
     * 		"clusterName": "ManagementCluster",
     * 		"hostUrn": "urn:sites:4BAD086A:hosts:62",
     * 		"isBindingHost": false,
     * 		"isTemplate": false,
     * 		"uri": "/service/sites/4BAD086A/vms/i-00000003",
     * 		"urn": "urn:sites:4BAD086A:vms:i-00000003",
     * 		"uuid": "e6479704-8f5a-40e7-a376-b320d022e706",
     * 		"clusterUrn": "urn:sites:4BAD086A:clusters:10",
     * 		"cdRomStatus": "empty",
     * 		"createTime": "2018-10-18 07:16:44",
     * 		"isLinkClone": false,
     * 		"locationName": "ManagementCluster",
     * 		"pvDriverStatus": "notRunning",
     * 		"toolInstallStatus": "empty",
     * 		"imcSetting": null,
     * 		"idle": 0,
     * 		"toolsVersion": ""
     *        }, {
     * 		"name": "VRM01",
     * 		"location": "urn:sites:4BAD086A:hosts:62",
     * 		"hostName": "linux-IcjKyx",
     * 		"description": "",
     * 		"group": "VRMGroup",
     * 		"status": "running",
     * 		"clusterName": "ManagementCluster",
     * 		"hostUrn": "urn:sites:4BAD086A:hosts:62",
     * 		"isBindingHost": true,
     * 		"isTemplate": false,
     * 		"uri": "/service/sites/4BAD086A/vms/i-00000001",
     * 		"urn": "urn:sites:4BAD086A:vms:i-00000001",
     * 		"uuid": "57bf58b6-a716-4037-81ac-0d49d506460b",
     * 		"clusterUrn": "urn:sites:4BAD086A:clusters:10",
     * 		"cdRomStatus": "empty",
     * 		"createTime": "2018-10-17 22:25:34",
     * 		"isLinkClone": false,
     * 		"locationName": "linux-IcjKyx",
     * 		"pvDriverStatus": "running",
     * 		"toolInstallStatus": "empty",
     * 		"imcSetting": null,
     * 		"idle": 0,
     * 		"toolsVersion": "1.3.0.23"
     *    }]
     * }
     */
    @Test
    public void queryVMs(){

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

        VmResource instance = ServiceFactory.getService(VmResource.class,clientProvider);

        QueryVmsReq req = new QueryVmsReq();
        req.setLimit(5);
        req.setOffset(0);
        FCSDKResponse<PageList<VmInfo>> fcsdkResponse = instance.queryVMs(req, siteUri);
        System.out.println(fcsdkResponse);

        SDKCommonResp sdkCommonResp = auth.logout();



    }
}
