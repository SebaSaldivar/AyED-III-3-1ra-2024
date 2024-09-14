import { Component } from '@angular/core';
import { Estudiante } from './models/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listaEstudiantesAC: Estudiante[] = [
    { 
      legajo : 5234,
      nombre : 'Juan Manuel',
      apellido : 'Ruiz',
      carrera : 'MySql',
      regular : true,
      fecha_inscripcion : new Date(2023, 2, 22)
    },
    { 
      legajo : 5568,
      nombre : 'Andres Luis',
      apellido : 'Lopez',
      carrera : 'Javascript',
      regular : false,
      fecha_inscripcion : new Date(2023, 4, 25)
    },
    { 
      legajo : 4718,
      nombre : 'Alejandra ',
      apellido : 'Diaz Paz',
      carrera : 'PHP',
      regular : true,
      fecha_inscripcion : new Date(2023, 1, 10)
    },
  ]

  ActualizarAlumnoAC(estudiante:Estudiante){
    console.log("Desde App-Component con la info de Padre");
    console.log(estudiante)
    this.listaEstudiantesAC.push(estudiante)
  }
}
