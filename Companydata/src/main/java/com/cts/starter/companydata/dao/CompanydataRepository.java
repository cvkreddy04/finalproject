package com.cts.starter.companydata.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.starter.companydata.pojo.Companydata;


public interface CompanydataRepository extends CrudRepository<Companydata,String> {
	Iterable<Companydata> findAll();
}
