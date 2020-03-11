package com.cts.starter.companydata;





import java.util.List;



import org.springframework.cloud.openfeign.FeignClient;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestMethod;



import com.cts.starter.companydata.pojo.Stockprice;







@FeignClient(value = "jcompany", url = "http://localhost:8022/Stockprice/")

public interface JSONCompanyClient {



 @GetMapping("/findByCompanyname/{companyname}")

 public List<Stockprice> findByCompanyname(@PathVariable("companyname") String companyname);



}