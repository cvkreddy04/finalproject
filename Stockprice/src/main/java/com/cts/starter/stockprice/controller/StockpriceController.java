package com.cts.starter.stockprice.controller;

import java.util.List;
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

import com.cts.starter.stockprice.dao.StockpriceRepository;
import com.cts.starter.stockprice.pojo.Stockprice;



@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/Stockprice")

public class StockpriceController {

	@Autowired

	private StockpriceRepository stockpriceRepository;

	@RequestMapping("/getAllStockprices")

	public Iterable<Stockprice> getAllStockPrice() {

		return stockpriceRepository.findAll();

	}

	@PostMapping("/saveStockprice")

	public Stockprice saveStockprice(@RequestBody Stockprice stockprice) {

		System.out.println(stockprice);

		stockpriceRepository.save(stockprice);

		return stockprice;

	}

	@PutMapping("/updateStockprice/{stockexchange}")

	public Stockprice updateStockprice(@RequestBody Stockprice stockprice,

			@PathVariable("stockexchange") String stockexchange) {

		stockprice.setCompanyname(stockexchange);

		System.out.println(stockprice);

		stockpriceRepository.save(stockprice);

		return stockprice;

	}

	@DeleteMapping("/deleteStockprice/{stockexchange}")

	public Boolean deleteStockprice(@PathVariable("stockexchange") String stockexchange) {

		System.out.println(stockexchange);

		Optional<Stockprice> stockprice = stockpriceRepository.findById(stockexchange);

		stockpriceRepository.delete(stockprice.get());

		return true;

	}

	@GetMapping("/findOneInAll5/{stockexchange}")

	public Stockprice findoneinall(@PathVariable("stockexchange") String stockexchange)

	{

		Optional<Stockprice> stockprice = stockpriceRepository.findById(stockexchange);

		return stockprice.get();

	}
	@GetMapping("/findByCompanyname/{companyname}")

     public List<Stockprice> findByCompanyname(@PathVariable("companyname") String companyname)
	 {
	 List<Stockprice> stockprice = stockpriceRepository.findByCompanyname(companyname);
	 return stockprice;



	 }

}
