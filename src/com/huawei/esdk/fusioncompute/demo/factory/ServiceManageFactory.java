package com.huawei.esdk.fusioncompute.demo.factory;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;

import org.apache.log4j.Logger;

import com.huawei.esdk.fusioncompute.demo.utils.ParametersUtils;
import com.huawei.esdk.fusioncompute.local.ServiceFactory;
import com.huawei.esdk.fusioncompute.local.model.ClientProviderBean;
import com.huawei.esdk.fusioncompute.local.resources.cluster.ClusterResource;
import com.huawei.esdk.fusioncompute.local.resources.common.AuthenticateResource;
import com.huawei.esdk.fusioncompute.local.resources.host.HostResource;
import com.huawei.esdk.fusioncompute.local.resources.net.DVSwitchResource;
import com.huawei.esdk.fusioncompute.local.resources.net.PortGroupResource;
import com.huawei.esdk.fusioncompute.local.resources.site.SiteResource;
import com.huawei.esdk.fusioncompute.local.resources.storage.DataStorageResource;
import com.huawei.esdk.fusioncompute.local.resources.vm.VmResource;

/**
 * 业务管理工厂类
 * 
 * @author 
 * @see
 * @since eSDK Cloud V100R003C20
 */
public class ServiceManageFactory extends HttpServlet
{
    
    /**
     * 序列化版本标识
     */
    private static final long serialVersionUID = -2077489280651541137L;

    /**
     * log日志对象
     */
    private static final Logger LOGGER = Logger
            .getLogger(ServiceManageFactory.class);

    /**
     * 服务器配置信息
     */
    private static ClientProviderBean bean = null;
    
    /**
     * 鉴权接口
     */
    private static AuthenticateResource authenticateResource = null;
  
    /**
     * 虚拟机相关接口
     */
    private static VmResource vmResource = null;
    
    /**
     * 端口组管理
     */
    private static PortGroupResource portGroupResource;
    
    /**
     * 集群类
     */
    private static ClusterResource clusterResource;
    
    /**
     * 主机类
     */
    private static HostResource hostResource;
    
    /**
     * 站点资源类
     */
    private static SiteResource siteResource;
    
    /**
     * DVSwitch资源类
     */
    private static DVSwitchResource dVSwitchResource;
    
    /**
     * 数据存储管理
     */
    private static DataStorageResource dataStorageResource;
    
    /** 
     * 重写init方法 
     */
    public void init(ServletConfig config)
        throws ServletException
    {
        super.init(config);
        
        intialService();
    }
    
    public static void intialService()
    {
        //获取服务器配置信息
        bean = getClientProviderBean();
        
        //从native Jar包的ServiceFactory类中获取相应的服务
        authenticateResource = ServiceFactory.getService(AuthenticateResource.class, bean);
        
        portGroupResource = ServiceFactory.getService(PortGroupResource.class, bean);
        
        dataStorageResource = ServiceFactory.getService(DataStorageResource.class, bean);
        
        hostResource = ServiceFactory.getService(HostResource.class, bean);
        
        clusterResource = ServiceFactory.getService(ClusterResource.class, bean);
       
        siteResource = ServiceFactory.getService(SiteResource.class, bean);
        
        dVSwitchResource = ServiceFactory.getService(DVSwitchResource.class, bean);
        
        vmResource = ServiceFactory.getService(VmResource.class, bean);
        
        LOGGER.info("Service initialization Complete!");
    }
    
    private static ClientProviderBean getClientProviderBean()
    {
        ClientProviderBean bean = new ClientProviderBean();
        bean.setUserName(ParametersUtils.userName);
        //设置服务器IP地址
        bean.setServerIp(ParametersUtils.serverIP);
        //设置服务器端口号
        bean.setServerPort(ParametersUtils.serverPort);
        
        bean.setProtocol("https");
        
        return bean;
    }
    
    public static AuthenticateResource getUserService()
    {
    	authenticateResource = ServiceFactory.getService(AuthenticateResource.class, bean);
        return authenticateResource;
    }
    
    
    public static HostResource getHostResource()
    {
    	return hostResource;
    }
   
    public static DVSwitchResource getDVSwitchResource()
    {
    	return dVSwitchResource;
    }

    public static SiteResource getSiteResource()
    {
    	return siteResource;
    }
    
    public static ClusterResource getClusterResource()
    {
    	return clusterResource;
    }
    
    public static PortGroupResource getPortGroupResource()
    {
    	return portGroupResource;
    }
    
    public static DataStorageResource getDataStorageResource()
    {
    	return dataStorageResource;
    }
    
    public static VmResource getVmResource()
    {
    	return vmResource;
    }
}
