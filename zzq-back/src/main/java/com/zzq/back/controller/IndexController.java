package com.zzq.back.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value = "/")
public class IndexController {

	@RequestMapping(value = "/back/index",method = RequestMethod.GET)
	public String indexBack(ModelMap model){
		return "index";
	}
}