package com.cts.starter.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.starter.pojo.User;

@RestController
public class HelloStarterController {
	@RequestMapping("/hello")
	public String Hello(){
		return "HelloStarter";
	}
	
	
}
