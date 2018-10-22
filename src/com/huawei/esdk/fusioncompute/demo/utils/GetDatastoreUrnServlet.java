package com.huawei.esdk.fusioncompute.demo.utils;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.google.gson.Gson;
import com.huawei.esdk.fusioncompute.local.model.FCSDKResponse;
import com.huawei.esdk.fusioncompute.local.model.PageList;
import com.huawei.esdk.fusioncompute.local.model.storage.Datastore;

public class GetDatastoreUrnServlet extends HttpServlet
{

    /**
     * 序列化版本标识
     */
    private static final long serialVersionUID = 406215323069888871L;
    
    /**
     * log日志对象
     */
    private static final Logger LOGGER = Logger
            .getLogger(GetDatastoreUrnServlet.class);
    
    
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
        // 获取需要调用的方法名
        String methodName = request.getParameter("method");
        String resp = "";

        if ("getDatastoreUrn".equals(methodName))
        {
            // 读取Demo所用参数
            resp = getDatastoreUrn(request);
        }

        // 输出流
        PrintWriter pw = response.getWriter();
        pw.print(resp);
        pw.close();
    }

    /**
     * 读取Demo所用参数
     * 
     * @param request
     *            HttpServletRequest对象
     * @return json格式的字符串
     * @see
     * @since eSDK Cloud V100R003C20
     */
    @SuppressWarnings("unchecked")
    public String getDatastoreUrn(HttpServletRequest request)
    {
        // 定义返回结果
        String response = null;

        LOGGER.info("Begin to read parameters.");

        HttpSession session = request.getSession();
        FCSDKResponse<PageList<Datastore>> resp = (FCSDKResponse<PageList<Datastore>>)session.getAttribute("DATASTORESRESOURCE_RES");
        
        // 根据接口返回数据生成JSON字符串，以便于页面展示
        response = gson.toJson(resp);
        LOGGER.info("Finish to read parameters, response is : " + response);

        return response;
    }
}
