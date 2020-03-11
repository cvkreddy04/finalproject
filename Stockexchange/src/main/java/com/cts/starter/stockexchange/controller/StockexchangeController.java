package com.cts.starter.stockexchange.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;

import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import com.cts.starter.stockexchange.dao.StockexchangeRepository;
import com.cts.starter.stockexchange.pojo.Stockexchange;





@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/Stocks")

public class StockexchangeController {

	@Autowired

	private StockexchangeRepository stockexchangeRepository;

	@RequestMapping("/getAllStocks")

	public Iterable<Stockexchange> getAllStocks() {

		return stockexchangeRepository.findAll();

	}

	@PostMapping("/saveStockdata")

	public Stockexchange saveStockexchange(@RequestBody Stockexchange stockexchange) {

		System.out.println(stockexchange);

		stockexchangeRepository.save(stockexchange);

		return stockexchange;

	}

	@PutMapping("/updateStockexchange/{stockexid}")

	public Stockexchange updateStockexchange(@RequestBody Stockexchange stockexchange, @PathVariable("stockexid") Integer stockexid) {

		stockexchange.setStockexid(stockexid);

		System.out.println(stockexchange);

		stockexchangeRepository.save(stockexchange);

		return stockexchange;

	}

	@DeleteMapping("/deleteStockexchange/{stockexid}")

	public Boolean deleteStockexchange(@PathVariable("stockexid") Integer stockexid) {

		System.out.println(stockexid);

		stockexchangeRepository.deleteById(stockexid);

		return true;

	}

	@GetMapping("/findOneInAll4/{stockexid}")

	public Stockexchange findoneinall(@PathVariable("stockexid") Integer stockexid) {

		Optional<Stockexchange> stockexchange = stockexchangeRepository.findById(stockexid);

		return stockexchange.get();

	}

}
