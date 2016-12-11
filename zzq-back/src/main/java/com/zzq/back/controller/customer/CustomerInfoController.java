package com.zzq.back.controller.customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

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
}
