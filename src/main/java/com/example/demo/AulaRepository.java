package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "aulas", path = "aulas")
public interface AulaRepository extends CrudRepository<Aula, Long> {
    
}
