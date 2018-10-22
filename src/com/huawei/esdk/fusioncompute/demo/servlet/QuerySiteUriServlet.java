package com.huawei.esdk.fusioncompute.demo.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.huawei.esdk.fusioncompute.demo.factory.ServiceManageFactory;
import com.huawei.esdk.fusioncompute.demo.utils.ParametersUtils;
import com.huawei.esdk.fusioncompute.local.model.FCSDKResponse;
import com.huawei.esdk.fusioncompute.local.model.common.LoginResp;
import com.huawei.esdk.fusioncompute.local.model.site.SiteBasicInfo;

/**
 * “查询SiteUri”请求处理类
 * @author 
 * @see
 * @since eSDK Cloud V100R003C50
 */
public class QuerySiteUriServlet extends HttpServlet
{
    /**
     * 序列化版本标识
     */
    private static final long serialVersionUID = 190954570327110272L;

    /**
     * log日志对象
     */
    private static final Logger LOGGER = Logger
            .getLogger(QuerySiteUriServlet.class);

    /**
     * gson，用于转换String和json之间的转换
     */
    private Gson gson = new Gson();

    @Override
    protected void doPost(
        HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        doGet(request, response);
    }

    @Override
    protected void doGet(
        HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException
    {
        //设置request的编码
        request.setCharacterEncoding("UTF-8");
        
        // 获取需要调用的方法名
        String methodName = request.getParameter("method");
        String resp = "";

        if ("querySiteUri".equals(methodName))
        {
            // 查询VDC
            resp = querySiteUri(request);
        }

        //设置response的编码
        response.setContentType("application/json;charset=UTF-8");
        // 输出流
        PrintWriter pw = response.getWriter();
        pw.print(resp);
        pw.close();
    }

    /**
     * 查VDC信息
     * 
     * @param request
     *            HttpServletRequest对象
     * @return json格式的字符串
     * @see
     * @since eSDK Cloud V100R003C50
     */
    public String querySiteUri(HttpServletRequest request)
    {
        // 定义返回结果
        String response = null;

        String userName = ParametersUtils.userName;
        String password = ParametersUtils.password;
        
        // 鉴权
        FCSDKResponse<LoginResp> loginResp = ServiceManageFactory.getUserService().login(userName, password);
        
        if (!"00000000".equals(loginResp.getErrorCode()))
        {
        	LOGGER.error("Failed to Login FC System!");
        	return gson.toJson(loginResp);
        }
        
        LOGGER.info("Login Success!");

        LOGGER.info("Begin to query SiteUri information.");
        
        
        FCSDKResponse<List<SiteBasicInfo>> resp = ServiceManageFactory.getSiteResource().querySites();
        
        
        // 根据接口返回数据生成JSON字符串，以便于页面展示
        response = gson.toJson(resp);
        
        LOGGER.info("Finish to query SiteUri, response is : " + response);

        return response;
    }
}
