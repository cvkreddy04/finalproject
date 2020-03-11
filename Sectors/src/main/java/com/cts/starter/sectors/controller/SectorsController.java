package com.cts.starter.sectors.controller;

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

import com.cts.starter.sectors.dao.SectorsRepository;
import com.cts.starter.sectors.pojo.Sectors;




@RestController
@CrossOrigin(origins="http://localhost:4200")

@RequestMapping("/Sectors")

public class SectorsController {

	@Autowired

	private SectorsRepository sectorsRepository;

	@RequestMapping("/getAllSectors")

	public Iterable<Sectors> getAllSectors() {

		return sectorsRepository.findAll();

	}

	@PostMapping("/saveSectors")

	public Sectors saveSectors(@RequestBody Sectors sectors) {

		System.out.println(sectors);

	sectorsRepository.save(sectors);

		return sectors;

	}

	@PutMapping("/updateSectors/{sectorid}")

	public Sectors updateSectors(@RequestBody Sectors sectors, @PathVariable("sectorid") Integer sectorid) {

		sectors.setSectorid(sectorid);

		System.out.println(sectors);

		sectorsRepository.save(sectors);

		return sectors;

	}

	@DeleteMapping("/deleteSectors/{sectorid}")

	public Boolean deleteSectors(@PathVariable("sectorid") Integer sectorid) {

		System.out.println(sectorid);

		sectorsRepository.deleteById(sectorid);

		return true;

	}

	@GetMapping("/findOneInAll3/{sectorid}")

	public Sectors findoneinall(@PathVariable("sectorid") Integer sectorid) {

		Optional<Sectors> sectors = sectorsRepository.findById(sectorid);

		return sectors.get();

	}

}
