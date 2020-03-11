package com.cts.starter.companydata;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
@EnableEurekaClient
@EnableFeignClients
@SpringBootApplication
public class CompanydataApplication {

	public static void main(String[] args) {
		SpringApplication.run(CompanydataApplication.class, args);
	}

}
