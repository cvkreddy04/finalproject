package com.cts.starter.dao;

import org.springframework.data.repository.CrudRepository;


import com.cts.starter.pojo.Stockprice;

public interface StockpriceRepository extends CrudRepository<Stockprice,String> {
	Iterable<Stockprice> findAll();
}
