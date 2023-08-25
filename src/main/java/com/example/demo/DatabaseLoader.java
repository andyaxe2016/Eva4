package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final CursoRepository repositoryI;
	private final AlumnoRepository repositoryM;
	private final AulaRepository repositoryB;
	private final PabellonRepository repositoryN;

	@Autowired
	public DatabaseLoader(
		CursoRepository repositoryI,
		AlumnoRepository repositoryM,
		AulaRepository repositoryB,
		PabellonRepository repositoryN
		) {
		this.repositoryI = repositoryI;
		this.repositoryM = repositoryM;
		this.repositoryB = repositoryB;
		this.repositoryN = repositoryN;
	}

	@Override
	public void run(String... strings) throws Exception {

		this.repositoryI.save(new Curso("Matematica 1", "Ciencia", "Trigonometria , Algrebra"));
		this.repositoryI.save(new Curso("Lenguaje","Letras","Comprension lectora "));
		this.repositoryI.save(new Curso("Fisica","Ciencia","formulas - laboratorio"));
		Curso iVoz = new Curso("Geometria","Ciencia",".");
		this.repositoryI.save(iVoz);
		Curso iCurso = new Curso("Biologia","Ciencia", ".");
		this.repositoryI.save(iCurso);
		this.repositoryI.save(new Curso("Trigonometria","Ciencia","."));

		this.repositoryM.save(new Alumno("Andy Chumpitaz"));
		Alumno mAlumno = new Alumno("Manuel");
		this.repositoryM.save(mAlumno);
		Alumno mBrian = new Alumno("Luis");
		this.repositoryM.save(mBrian);

		Aula bAula = new Aula("Azul");
		this.repositoryB.save(bAula);

		this.repositoryN.save(new Pabellon(bAula, mAlumno, iVoz));
		this.repositoryN.save(new Pabellon(bAula, mBrian, iCurso));


	}
}