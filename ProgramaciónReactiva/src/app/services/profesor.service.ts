import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Profesor } from '../models/profesor';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
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
  
  private listaFiltrada!: Profesor[];

  constructor() {
    this.listaProfesores$ = new BehaviorSubject(this.listaProfesores);
    /*     this.listaProfesores$ = new Observable<Profesor[]>((suscriptor) =>{
      suscriptor.next(this.listaProfesores) }) */

    of(this.listaProfesores)
      .pipe(
        map((listaProfesores: Profesor[]) => {
          return listaProfesores.filter(
            (profesor: Profesor) => profesor.materia === 'Angular'
          );
        })
      )
      .subscribe((listaProfesores) => {
        this.listaFiltrada = listaProfesores;
      });
  }

  ObtenerProfeObservable(): Observable<Profesor[]> {
    return this.listaProfesores$.asObservable();
  }

  AgregarProfe(profe: Profesor) {   
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
  
  public getListaFiltrada(): Profesor[] {
    return this.listaFiltrada;
  }
}
