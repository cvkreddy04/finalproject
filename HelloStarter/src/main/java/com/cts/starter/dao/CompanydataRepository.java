package com.cts.starter.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.starter.pojo.Companydata;
import com.cts.starter.pojo.User;

public interface CompanydataRepository extends CrudRepository<Companydata,String> {
	Iterable<Companydata> findAll();
}
