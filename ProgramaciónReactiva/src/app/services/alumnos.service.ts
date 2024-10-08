import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root',
})
export class AlumnosService {
  private listaEstudiantes: Estudiante[] = [
    {
      legajo: 1234,
      nombre: 'Patricia',
      apellido: 'Ruiz',
      profesor: {
        nombre: 'Juan',
        apellido: 'Alvarez',
        materia: 'Angular',
      },
      notaFinal: 8,
      libre: false,
      fechaAprobacion: new Date(2022, 11, 12),
    },
    {
      legajo: 1277,
      nombre: 'Jose',
      apellido: 'Rozas',
      profesor: {
        nombre: 'Andres',
        apellido: 'Rosales',
        materia: 'React',
      },
      notaFinal: 8,
      libre: false,
      fechaAprobacion: new Date(2022, 11, 14),
    },
    {
      legajo: 1299,
      nombre: 'Pedro',
      apellido: 'Marz',
      profesor: {
        nombre: 'Felipe',
        apellido: 'Richard',
        materia: 'VueJS',
      },
      notaFinal: 8,
      libre: true,
      fechaAprobacion: new Date(2022, 11, 5),
    },
    {
      legajo: 1255,
      nombre: 'Juana',
      apellido: 'Lopez',
      profesor: {
        nombre: 'Juan',
        apellido: 'Alvarez',
        materia: 'Angular',
      },
      notaFinal: 2,
      libre: false,
      fechaAprobacion: new Date(2022, 11, 12),
    },
    {
      legajo: 1355,
      nombre: 'Lorena',
      apellido: 'Zamboni',
      profesor: {
        nombre: 'Felipe',
        apellido: 'Richard',
        materia: 'VueJS',
      },
      notaFinal: 4,
      libre: true,
      fechaAprobacion: new Date(2022, 11, 17),
    },
    {
      legajo: 1212,
      nombre: 'Alfredo',
      apellido: 'Gonzalez',
      profesor: {
        nombre: 'Juan',
        apellido: 'Alvarez',
        materia: 'Angular',
      },
      notaFinal: 10,
      libre: false,
      fechaAprobacion: new Date(2022, 10, 19),
    },
  ];

  private listaEstudiantes$!: BehaviorSubject<Estudiante[]>;

  constructor() {
    this.listaEstudiantes$ = new BehaviorSubject(this.listaEstudiantes);
    /*   this.listaEstudiantes$ = new Observable<Estudiante[]>((suscriptor) =>{
      suscriptor.next(this.listaEstudiantes) 
    }); */
  }

  ObtenerAlumnosObservable(): Observable<Estudiante[]> {
    return this.listaEstudiantes$.asObservable();
  }

  AgregarAlumno(estudiante: Estudiante) {
    this.listaEstudiantes.push(estudiante);
    this.listaEstudiantes$.next(this.listaEstudiantes);
  }

  EditarAlumno(estudiante: Estudiante) {
    let indice = this.listaEstudiantes.findIndex(
      (Estudiante) => Estudiante.legajo === estudiante.legajo
    );
    this.listaEstudiantes[indice] = estudiante;
    this.listaEstudiantes$.next(this.listaEstudiantes);
  }

  EliminarAlumno(estudiante: Estudiante) {
    let indice = this.listaEstudiantes.indexOf(estudiante);
    this.listaEstudiantes.splice(indice, 1);
    this.listaEstudiantes$.next(this.listaEstudiantes);
  }
}
