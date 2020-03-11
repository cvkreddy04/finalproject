package com.cts.starter.ipos.dao;

import org.springframework.data.repository.CrudRepository;


import com.cts.starter.ipos.pojo.Ipos;

public interface IposRepository extends CrudRepository<Ipos,Integer> {
	Iterable<Ipos> findAll();
}
