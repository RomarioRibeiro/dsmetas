package com.romario.dsmeta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.romario.dsmeta.entities.Sale;

public interface SaleRepository  extends JpaRepository<Sale, Long>{
	
}
