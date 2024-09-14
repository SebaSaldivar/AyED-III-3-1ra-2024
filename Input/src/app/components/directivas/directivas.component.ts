import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {

  nombre = "Soy componente";
  numero = 8;
  cantAlumnos : number = 15;
  nombreAlumno!: String;
  apellidoAlumno!: String;
  
  
  estudianteActual : Estudiante = {
    legajo : 7965,
    nombre : 'Jose Maria',
    apellido : 'Herrera',
    carrera : 'HTML & CSS',
    regular : true,
    fecha_inscripcion : new Date(2023, 3, 22)
  }

  listaEstudiantes: Estudiante[] = [
    { 
      legajo : 1234,
      nombre : 'Juan Carlos',
      apellido : 'Gutierrez',
      carrera : 'Angular',
      regular : true,
      fecha_inscripcion : new Date(2022, 2, 25)
    },
    { 
      legajo : 3568,
      nombre : 'Felipe Luis',
      apellido : 'Gómez',
      carrera : 'Java',
      regular : false,
      fecha_inscripcion : new Date(2022, 3, 25)
    },
    { 
      legajo : 4778,
      nombre : 'Marcela ',
      apellido : 'Diaz Lopez',
      carrera : 'Javascript',
      regular : true,
      fecha_inscripcion : new Date(2022, 3, 10)
    },
  ]

  AgregarEstudiante(){
    let estudianteModel : Estudiante = {
      legajo : 7965,
      nombre : this.nombreAlumno,
      apellido : this.apellidoAlumno,
      carrera : 'ReactJS',
      regular : true,
      fecha_inscripcion : new Date(2023, 3, 22)
    }
    this.listaEstudiantes.push(this.estudianteActual);
  }
  numero1!: number; 
  numero2!: number;
  resultado! :number;

  Calcular(){
    this.resultado = this.numero1 + this.numero2;
  }

  

}
