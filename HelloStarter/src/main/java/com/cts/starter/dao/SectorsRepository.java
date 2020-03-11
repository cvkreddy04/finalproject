package com.cts.starter.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.starter.pojo.Companydata;
import com.cts.starter.pojo.Ipos;
import com.cts.starter.pojo.Sectors;

public interface SectorsRepository extends CrudRepository<Sectors,Integer> {
	Iterable<Sectors> findAll();
}
