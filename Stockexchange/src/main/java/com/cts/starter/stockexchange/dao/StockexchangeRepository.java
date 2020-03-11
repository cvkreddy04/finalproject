package com.cts.starter.stockexchange.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.starter.stockexchange.pojo.Stockexchange;

public interface StockexchangeRepository extends CrudRepository<Stockexchange,Integer> {
	Iterable<Stockexchange> findAll();
}
