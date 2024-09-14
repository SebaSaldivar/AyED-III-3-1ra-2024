import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-componente-general',
  templateUrl: './componente-general.component.html',
  styleUrls: ['./componente-general.component.css']
})
export class ComponenteGeneralComponent {

  nombreAlumno!: String;
  apellidoAlumno!: String;
  
  
  estudianteActual : Estudiante = {
    legajo : 0,
    nombre : '',
    apellido : '',
    carrera : '',
    regular : false,
    fecha_inscripcion : new Date(1900, 1, 1)
  }

  listaEstudiantes: Estudiante[] = [
    { 
      legajo : 1234,
      nombre : 'Juan Carlos',
      apellido : 'Gutierrez',
      carrera : 'Angular',
      regular : true,
      fecha_inscripcion : new Date(2021, 2, 25)
    },
    { 
      legajo : 3568,
      nombre : 'Felipe Luis',
      apellido : 'Gómez',
      carrera : 'Java',
      regular : false,
      fecha_inscripcion : new Date(2023, 3, 25)
    },
    { 
      legajo : 4778,
      nombre : 'Marcela ',
      apellido : 'Diaz Lopez',
      carrera : 'Javascript',
      regular : true,
      fecha_inscripcion : new Date(2022, 3, 10)
    },
    { 
      legajo : 4741,
      nombre : 'Sol Patricia',
      apellido : 'González',
      carrera : 'MySQL',
      regular : false,
      fecha_inscripcion : new Date(2023, 3, 14)
    },
    { 
      legajo : 4358,
      nombre : 'Carla Andrea',
      apellido : 'Funes',
      carrera : 'NodeJs',
      regular : true,
      fecha_inscripcion : new Date(2023, 4, 10)
    },
  ]

  AgregarEstudianteEnEsteComponente(){
    /* let estudianteModel : Estudiante = {
      legajo : 7965,
      nombre : this.nombreAlumno,
      apellido : this.apellidoAlumno,
      carrera : 'ReactJS',
      regular : true,
      fecha_inscripcion : new Date(2023, 3, 22)
    } */
    this.listaEstudiantes.push(this.estudianteActual);
  }

AgregarAlumnoQueVieneDesdeHijo(estudiante:Estudiante){
  this.listaEstudiantes.push(estudiante);
}

}
