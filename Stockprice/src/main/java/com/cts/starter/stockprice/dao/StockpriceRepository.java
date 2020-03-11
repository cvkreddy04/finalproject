package com.cts.starter.stockprice.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;


import com.cts.starter.stockprice.pojo.Stockprice;

public interface StockpriceRepository extends CrudRepository<Stockprice,String> {
	Iterable<Stockprice> findAll();

	List<Stockprice> findByCompanyname(String companyname);
}
