package com.cts.starter.sectors.dao;

import org.springframework.data.repository.CrudRepository;



import com.cts.starter.sectors.pojo.Sectors;

public interface SectorsRepository extends CrudRepository<Sectors,Integer> {
	Iterable<Sectors> findAll();
}
