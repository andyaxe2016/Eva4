package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "pabellones", path = "pabellones")
public interface PabellonRepository extends CrudRepository<Pabellon, Long> {
    
}
