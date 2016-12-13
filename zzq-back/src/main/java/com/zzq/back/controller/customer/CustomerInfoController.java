package com.zzq.back.controller.customer;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.zzq.back.entity.CustomerInfo;
import com.zzq.back.service.customer.CustomerInfoService;

@Controller
@RequestMapping("customerInfo")
public class CustomerInfoController {
	
	@Autowired
	CustomerInfoService customerInfoService;
	
	@RequestMapping(value="list")
	public String list(CustomerInfo customerInfo,ModelMap model,Integer pageNum){
		PageInfo<CustomerInfo> pageInfo = customerInfoService.queryListByPage(pageNum,customerInfo);
		model.put("pageInfo", pageInfo);
		return "customer/customerList";
	}
	
	@RequestMapping(value = "save")
	@ResponseBody
	public Map<String,Object> save(CustomerInfo customerInfo){
		Map<String,Object> resultMap = new HashMap<String,Object>();
		if(customerInfoService.saveCustomerInfo(customerInfo)){
			resultMap.put("msg", "保存成功");
		}else{
			resultMap.put("msg","保存失败");
		}
		return resultMap;
	}
}
