package com.cts.starter.dao;

import org.springframework.data.repository.CrudRepository;

import com.cts.starter.pojo.Stockexchange;
import com.cts.starter.pojo.User;

public interface StockexchangeRepository extends CrudRepository<Stockexchange,Integer> {
	Iterable<Stockexchange> findAll();
}
