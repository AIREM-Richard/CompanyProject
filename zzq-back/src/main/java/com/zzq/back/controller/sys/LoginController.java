package com.zzq.back.controller.sys;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping(value ="/")
public class LoginController {

	private static final String PATH_PREFIX = "sys";
	
	@RequestMapping(value="/login",method=RequestMethod.GET)
	public String login(){
		return PATH_PREFIX + "/login";
	}
	
	@RequestMapping(value = "/login",method= RequestMethod.POST)
	public String loginManage(Model model){
		return PATH_PREFIX + "/login";
	}
}
