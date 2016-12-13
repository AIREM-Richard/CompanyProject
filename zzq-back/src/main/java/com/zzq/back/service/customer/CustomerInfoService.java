package com.zzq.back.service.customer;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.zzq.back.dao.CustomerInfoDao;
import com.zzq.back.entity.CustomerInfo;

@Service
public class CustomerInfoService {

	@Autowired
	private CustomerInfoDao customerInfoDao;
	
	public PageInfo<CustomerInfo> queryListByPage(Integer pageNum, CustomerInfo customerInfo){
		pageNum = pageNum != null ? pageNum : 1;
		PageHelper.startPage(pageNum, 20, true);
		List<CustomerInfo> customerInfoList = customerInfoDao.selectCustomerInfoByParam();
		return new PageInfo<CustomerInfo>(customerInfoList);
	}
	
	@Transactional
	public boolean saveCustomerInfo(CustomerInfo customerInfo){
		customerInfoDao.insertSelective(customerInfo);
		return true;
	}
}
