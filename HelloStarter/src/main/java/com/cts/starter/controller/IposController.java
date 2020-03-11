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


import com.cts.starter.dao.IposRepository;
import com.cts.starter.pojo.Ipos;


@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/ipos")

public class IposController {

	@Autowired

	private IposRepository iposRepository;

	@RequestMapping("getAllIpos")

	public Iterable<Ipos> getAllIpos() {

		return iposRepository.findAll();

	}

	@PostMapping("/saveIpos")

	public Ipos saveIpos(@RequestBody Ipos ipos) {

		System.out.println(ipos);

	iposRepository.save(ipos);

		return ipos;

	}

	@PutMapping("/updateIpos/{ipoid}")

	public Ipos updateIpos(@RequestBody Ipos ipos, @PathVariable("ipoid") Integer ipoid) {

		ipos.setIpoid(ipoid);

		System.out.println(ipos);

		iposRepository.save(ipos);

		return ipos;

	}

	@DeleteMapping("/deleteIpos/{ipoid}")

	public Boolean deleteIpos(@PathVariable("ipoid") Integer ipoid) {

		System.out.println(ipoid);

		iposRepository.deleteById(ipoid);

		return true;

	}

	@GetMapping("/findOneInAll2/{ipoid}")

	public Ipos findoneinall(@PathVariable("ipoid") Integer ipoid) {

		Optional<Ipos> ipos = iposRepository.findById(ipoid);

		return ipos.get();

	}

}
