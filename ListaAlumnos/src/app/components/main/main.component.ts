import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  listaEstudiantes: Array<Estudiante> = [
    {
      legajo: 1234,
      nombre: 'Patricia',
      apellido: 'Ruiz',
      notaFinal: 8,
      estado: 'Aprobado',
    },
    {
      legajo: 1285,
      nombre:'Lorena',
      apellido: 'Romero',
      notaFinal: 6,
      estado: 'Aprobado',
    }, 
    {
      legajo: 1242,
      nombre:'Miguel',
      apellido:'Sosa',
      notaFinal: 3,
      estado: 'Desaprobado',
    }, 
    {
      legajo: 1252,
      nombre:'Felipe',
      apellido:'Gonzalez',
      notaFinal: 2,
      estado: 'Desaprobado',
    }, 
    {
    legajo: 1358,
    nombre:'Ariel',
    apellido:'Gomez',
    notaFinal: 10,
    estado: 'Aprobado',
    }, 
    {
    legajo: 1689,
    nombre:'Alan',
    apellido:'Palacios',
    notaFinal: 3,
    estado: 'Desaprobado',
    }, 
    {
    legajo: 1699,
    nombre:'Maria Lujan',
    apellido:'Polo',
    notaFinal: 9,
    estado: 'Aprobado',
    }, 
    {
    legajo: 1288,
    nombre:'Juan Pablo',
    apellido:'Roca',
    notaFinal: 5,
    estado: 'Aprobado',
    }, 
    {
    legajo: 1888,
    nombre:'Rolando',
    apellido:'Arce',
    notaFinal: 3,
    estado: 'Desaprobado',
    }, 
      {
    legajo: 1778,
    nombre:'María Luz',
    apellido:'Wick',
    notaFinal: 8,
    estado: 'Aprobado',
    }, 
    {
    legajo: 1488,
    nombre:'Javier',
    apellido:'Herrera',
    notaFinal: 2,
    estado: 'Desaprobado',
    }, 
  ]
}
