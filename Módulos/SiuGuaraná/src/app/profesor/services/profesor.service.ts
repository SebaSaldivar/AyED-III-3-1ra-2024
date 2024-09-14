import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Profesor } from '../models/profesor';
import { map, of } from 'rxjs';

@Injectable()
export class ProfesorService {
  private listaProfesores: Array<Profesor> = [
    {
      nombre: 'Felipe',
      apellido: 'Rodriguez',
      materia: 'Angular',
    },
    {
      nombre: 'Andrés',
      apellido: 'Lopez',
      materia: 'VueJS',
    },
    {
      nombre: 'Carlos',
      apellido: 'Funes',
      materia: 'VB.net',
    },
    {
      nombre: 'Andrea',
      apellido: 'Gomez',
      materia: 'Angular',
    },
    {
      nombre: 'Sofia',
      apellido: 'Gimenez',
      materia: 'SQL Server',
    },
    {
      nombre: 'Enrique',
      apellido: 'Palos',
      materia: 'Angular',
    },
  ];

  private listaProfesores$: BehaviorSubject<Profesor[]>;

  constructor() {
    this.listaProfesores$ = new BehaviorSubject(this.listaProfesores);
    /*     this.listaProfesores$ = new Observable<Profesor[]>((suscriptor) =>{
      suscriptor.next(this.listaProfesores) }) */

   
  }

  public getListaFiltrada(textoAFiltrar:string): Observable<Profesor[]> {

    return of(this.listaProfesores)
      .pipe(
        map((listaProfesores: Profesor[]) => {
          return listaProfesores.filter(
            (profesor: Profesor) => profesor.materia === textoAFiltrar
          );
        })
      );
  }

  ObtenerProfeObservable(): Observable<Profesor[]> {
    return this.listaProfesores$.asObservable();
  }

  AgregarProfe(profe: Profesor) {
    //Por ahora declaro un objeto 'profesor' literalmente para agregarlo hasta que rehaga mi dialog de Alta/Edición
    let unProfe = {
      nombre: 'Florencia',
      apellido: 'Marquez',
      materia: 'Angular',
    };
    this.listaProfesores.push(profe);
    this.listaProfesores$.next(this.listaProfesores);
  }

  EditarProfe(profesor: Profesor) {
    let indice = this.listaProfesores.findIndex(
      (Profesor) => Profesor.apellido === profesor.apellido
    );
    this.listaProfesores[indice] = profesor;
    this.listaProfesores$.next(this.listaProfesores);
  }

  EliminarProfe(profesor: Profesor) {
    let indice = this.listaProfesores.indexOf(profesor);
    this.listaProfesores.splice(indice, 1);
    this.listaProfesores$.next(this.listaProfesores);
  }
}
