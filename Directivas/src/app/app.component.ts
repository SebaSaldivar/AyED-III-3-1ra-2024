import { Component } from '@angular/core';
import { Estudiante } from './models/estudiante';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  listaEstudiantes: Estudiante[] = [
    { 
      legajo : 5898,
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
}
