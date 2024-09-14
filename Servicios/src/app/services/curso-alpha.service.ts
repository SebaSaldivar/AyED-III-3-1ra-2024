import { Injectable } from '@angular/core';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoAlphaService {
  private cursos: Curso[] = [
    {
      nombre: 'Angular con UseExisting', 
      comision: '49533', 
      profesor: {
        nombre: 'Phill',
        correo: 'phill@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 0, 1, 20, 30, 0),
      fechaFin: new Date(2023, 0, 31, 20, 30, 0),
      inscripcionAbierta: true
    },
    {
      nombre: 'VueJs con UseExisting', 
      comision: '42523', 
      profesor: {
        nombre: 'Lucas',
        correo: 'lucas@gmail.com',
        fechaRegistro: new Date(2022, 2, 15)
      },
      fechaInicio: new Date(2023, 1, 1, 20, 30, 0),
      fechaFin: new Date(2023, 1, 31, 20, 30, 0),
      inscripcionAbierta: false
    }
  ];

  constructor() { }

  obtenerCursos(): Array<Curso>{
    return this.cursos;
  }

  agregarCurso(curso: Curso){
    curso.nombre = 'Angular (Prueba con UseClass)';
    this.cursos.push(curso);
    console.log('Curso agregado', this.cursos);
  }
}
