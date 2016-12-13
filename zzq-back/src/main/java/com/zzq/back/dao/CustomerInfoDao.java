package com.zzq.back.dao;

import java.util.List;

import com.zzq.back.entity.CustomerInfo;

public interface CustomerInfoDao {
	List<CustomerInfo> selectCustomerInfoByParam();
	
	int insertSelective(CustomerInfo record);
	
    int deleteByPrimaryKey(Long id);
    
    int insert(CustomerInfo record);

    CustomerInfo selectByPrimaryKey(Long id);

    int updateByPrimaryKeySelective(CustomerInfo record);

    int updateByPrimaryKey(CustomerInfo record);
}