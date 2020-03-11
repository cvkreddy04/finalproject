package com.cts.starter.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.starter.pojo.Companydata;
import com.cts.starter.pojo.Ipos;

public interface IposRepository extends CrudRepository<Ipos,Integer> {
	Iterable<Ipos> findAll();
}
