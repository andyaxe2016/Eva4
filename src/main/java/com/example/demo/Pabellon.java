package com.example.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Pabellon {
    
    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_aula")
    private Aula aula;

    @ManyToOne()
    @JoinColumn(name = "id_alumno")
    private Alumno alumno;

    @ManyToOne()
    @JoinColumn(name = "id_curso")
    private Curso curso;

    public Pabellon() {}


	

    public Pabellon(Aula aula, Alumno alumno, Curso curso) {
		this.aula = aula;
		this.alumno = alumno;
		this.curso = curso;
	}




	public Long getId() {
		return id;
	}




	public void setId(Long id) {
		this.id = id;
	}




	public Aula getAula() {
		return aula;
	}




	public void setAula(Aula aula) {
		this.aula = aula;
	}




	public Alumno getAlumno() {
		return alumno;
	}




	public void setAlumno(Alumno alumno) {
		this.alumno = alumno;
	}




	public Curso getCurso() {
		return curso;
	}




	public void setCurso(Curso curso) {
		this.curso = curso;
	}




	

	

    

}
