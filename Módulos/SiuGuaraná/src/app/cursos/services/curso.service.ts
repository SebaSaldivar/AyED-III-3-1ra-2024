import { Injectable, Pipe } from '@angular/core';
import { Cursos } from '../models/cursos';

@Injectable()
export class CursoService {
  private listaCursos: Array<Cursos> = [
    {
      comision: 12258,
      nombre: 'Angular',
      profesor: {
        nombre: 'Juan',
        apellido: 'Alvarez',
        materia: 'Angular',
      },
      presencial: false,
      fechaInicio: new Date(2023, 3, 13),
    },
    {
      comision: 12260,
      nombre: 'React',
      profesor: {
        nombre: 'Enrique',
        apellido: 'Bono',
        materia: 'React',
      },
      presencial: true,
      fechaInicio: new Date(2023, 3, 15),
    },
    {
      comision: 12888,
      nombre: 'MySQL',
      profesor: {
        nombre: 'Alfredo',
        apellido: 'Witter',
        materia: 'MySql',
      },
      presencial: false,
      fechaInicio: new Date(2023, 4, 10),
    },
    {
      comision: 15658,
      nombre: 'PHP',
      profesor: {
        nombre: 'Lola',
        apellido: 'Fernandez',
        materia: 'Angular',
      },
      presencial: true,
      fechaInicio: new Date(2023, 5, 13),
    },
  ];

  constructor() {}

  ObtenerCursosPromise(): Promise<Cursos[]> {
    return new Promise((resolve, reject) => {
      if (this.listaCursos.length > 0) {
        resolve(this.listaCursos);
      } else {
        reject({
          Código: 404,
          Descripción: 'No hay cursos que mostrar!',
        });
      }
    });
  }

  AgregarCurso(curso: Cursos) {
    this.listaCursos.push(curso);
  }

  EliminarCurso(curso: Cursos) {
    let indice = this.listaCursos.indexOf(curso);
    this.listaCursos.splice(indice, 1);
  }
}
