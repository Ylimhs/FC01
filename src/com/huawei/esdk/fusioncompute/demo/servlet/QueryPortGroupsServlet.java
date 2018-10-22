package com.huawei.esdk.fusioncompute.demo.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.huawei.esdk.fusioncompute.demo.factory.ServiceManageFactory;
import com.huawei.esdk.fusioncompute.demo.utils.ParametersUtils;
import com.huawei.esdk.fusioncompute.local.model.FCSDKResponse;
import com.huawei.esdk.fusioncompute.local.model.PageList;
import com.huawei.esdk.fusioncompute.local.model.common.LoginResp;
import com.huawei.esdk.fusioncompute.local.model.net.PortGroup;

/**
 * “查询PortGroups”请求处理类
 * @author 
 * @see
 * @since eSDK Cloud V100R003C50
 */
public class QueryPortGroupsServlet extends HttpServlet
{
    /**
     * 序列化版本标识
     */
    private static final long serialVersionUID = 190954570327110271L;

    /**
     * log日志对象
     */
    private static final Logger LOGGER = Logger
            .getLogger(QueryPortGroupsServlet.class);

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

        if ("queryPortGroups".equals(methodName))
        {
            // 查询PortGroups
            resp = queryPortGroups(request);
        }

        //设置response的编码
        response.setContentType("application/json;charset=UTF-8");
        // 输出流
        PrintWriter pw = response.getWriter();
        pw.print(resp);
        pw.close();
    }

    /**
     * 查询PortGroups信息
     * 
     * @param request
     *            HttpServletRequest对象
     * @return json格式的字符串
     * @see
     * @since eSDK Cloud V100R003C50
     */
    public String queryPortGroups(HttpServletRequest request)
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

        LOGGER.info("Begin to query PortGroups information.");
        
        String name = request.getParameter("name");
        String limit = request.getParameter("limit");
        String offset = request.getParameter("start");
        
        String dvswitchUri = request.getParameter("dVSwithUri");
        
        FCSDKResponse<PageList<PortGroup>> resp = ServiceManageFactory.getPortGroupResource().queryPortGroups(dvswitchUri, offset==""?null:Integer.valueOf(offset), limit==""?null:Integer.valueOf(limit), name==""?null:name);
        
        // 根据接口返回数据生成JSON字符串，以便于页面展示
        response = gson.toJson(resp);
        
        HttpSession session = request.getSession();
        session.setAttribute("PORTGROUPSRESOURCE_RES", resp);
        
        LOGGER.info("Finish to query PortGroups, response is : " + response);

        return response;
    }
}
