package com.cts.starter.controller;

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

import com.cts.starter.dao.CompanydataRepository;

import com.cts.starter.pojo.Companydata;



@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/company")

public class CompanydataController {

	@Autowired

	private CompanydataRepository companydataRepository;

	@RequestMapping("/getAllCompanies")

	public Iterable<Companydata> getAllCompanies() {

		return companydataRepository.findAll();

	}

	@PostMapping("/saveCompanydata")

	public Companydata saveCompanydata(@RequestBody Companydata companydata) {

		System.out.println(companydata);

	companydataRepository.save(companydata);

		return companydata;

	}

	@PutMapping("/updateCompanydata/{companyname}")

	public Companydata updateCompanydata(@RequestBody Companydata companydata, @PathVariable("companyname") String companyname) {

		companydata.setCompanyname(companyname);

		System.out.println(companydata);

		companydataRepository.save(companydata);

		return companydata;

	}

	@DeleteMapping("/deleteCompanydata/{companyname}")

	public Boolean deleteCompanydata(@PathVariable("companyname") String companyname) {

		System.out.println(companyname);

		companydataRepository.deleteById(companyname);

		return true;

	}

	@GetMapping("/findOneInAll1/{companyname}")

	public Companydata findoneinall(@PathVariable("companyname") String companyname) {

		Optional<Companydata> companydata = companydataRepository.findById(companyname);

		return companydata.get();

	}

}
