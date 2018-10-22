package Cluster;

import com.huawei.esdk.fusioncompute.local.ServiceFactory;
import com.huawei.esdk.fusioncompute.local.model.ClientProviderBean;
import com.huawei.esdk.fusioncompute.local.model.FCSDKResponse;
import com.huawei.esdk.fusioncompute.local.model.PageList;
import com.huawei.esdk.fusioncompute.local.model.SDKCommonResp;
import com.huawei.esdk.fusioncompute.local.model.cluster.ClusterBasicInfo;
import com.huawei.esdk.fusioncompute.local.model.common.LoginResp;
import com.huawei.esdk.fusioncompute.local.model.host.Host;
import com.huawei.esdk.fusioncompute.local.model.host.QueryHostListReq;
import com.huawei.esdk.fusioncompute.local.model.host.QueryHostsUsageResp;
import com.huawei.esdk.fusioncompute.local.resources.cluster.ClusterResource;
import com.huawei.esdk.fusioncompute.local.resources.common.AuthenticateResource;
import com.huawei.esdk.fusioncompute.local.resources.host.HostResource;
import org.junit.Test;

import java.util.List;

public class test_Cluster {





    @Test
    public void queryClusters(){
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

        //获取ClusterResource接口的实现
        ClusterResource service = ServiceFactory.getService(ClusterResource.class,clientProvider);

        String siteUri = "/service/sites/4BAD086A";
        String tag = "";
        String name = "";

        Integer limit = 50;
        Integer offset = 0;

        QueryHostListReq req = new QueryHostListReq();
        req.setLimit(limit);
        req.setOffset(offset);

        //获取主机列表
        /**
         * {
         * 	"total": 1,
         * 	"hosts": [{
         * 		"name": "linux-IcjKyx",
         * 		"description": null,
         * 		"status": "normal",
         * 		"clusterName": "ManagementCluster",
         * 		"ip": "192.168.5.222",
         * 		"uri": "/service/sites/4BAD086A/hosts/62",
         * 		"urn": "urn:sites:4BAD086A:hosts:62",
         * 		"bmcIp": null,
         * 		"bmcUserName": null,
         * 		"clusterUrn": "urn:sites:4BAD086A:clusters:10",
         * 		"computeResourceStatics": "/service/sites/4BAD086A/hosts/62/computeResourceStatics",
         * 		"cpuMHz": 3300,
         * 		"cpuQuantity": 6,
         * 		"hostMultiPathMode": "CURRENCY",
         * 		"isMaintaining": false,
         * 		"memQuantityMB": 12961,
         * 		"multiPathMode": "CURRENCY",
         * 		"nicQuantity": 4,
         * 		"imcSetting": null,
         * 		"maxImcSetting": "Sandy Bridge",
         * 		"ntpCycle": null,
         * 		"ntpIp1": null,
         * 		"ntpIp2": null,
         * 		"ntpIp3": null,
         * 		"physicalCpuQuantity": 1,
         * 		"cpuResource": {
         * 			"totalSizeMHz": 19800,
         * 			"allocatedSizeMHz": 13200
         *                },
         * 		"gdvmMemory": 128,
         * 		"gdvmMemoryReboot": 128,
         * 		"gpuCapacity": 0,
         * 		"gpuCapacityReboot": 0,
         * 		"gsvmMemory": 64,
         * 		"gsvmMemoryReboot": 64,
         * 		"memResource": {
         * 			"totalSizeMB": 12961,
         * 			"allocatedSizeMB": 6270
         *        },
         * 		"attachedISOVMs": []* 	}]
         * }
         */
        HostResource hostResource = ServiceFactory.getService(HostResource.class, clientProvider);
        FCSDKResponse<PageList<Host>> hostResp = hostResource.queryHostList(siteUri,req);
        System.out.println(hostResp);


        // 集群
        /**
         * {
         * 	"clusters": [{
         * 		"name": "ManagementCluster",
         * 		"description": null,
         * 		"tag": "domain/default",
         * 		"uri": "/service/sites/4BAD086A/clusters/10",
         * 		"urn": "urn:sites:4BAD086A:clusters:10",
         * 		"cpuResource": {
         * 			"totalSizeMHz": 19800,
         * 			"allocatedSizeMHz": 13200
         *                },
         * 		"memResource": {
         * 			"totalSizeMB": 12961,
         * 			"allocatedSizeMB": 6270
         *        }* 	}]
         * }
         */
        ClusterResource clusterResource = ServiceFactory.getService(ClusterResource.class,clientProvider);
        FCSDKResponse<List<ClusterBasicInfo>> clusResp = clusterResource.queryClusters(siteUri, tag, name);
        System.out.println(clusResp);




    }

    @Test
    public void queryHostsUsage(){
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

        HostResource hostResource = ServiceFactory.getService(HostResource.class, clientProvider);
        FCSDKResponse<QueryHostsUsageResp> queryHostsUsageRespFCSDKResponse = hostResource.queryHostsUsage(siteUri,scope);
        System.out.println(queryHostsUsageRespFCSDKResponse);

        //logout
        SDKCommonResp respout = auth.logout();
    }


}
