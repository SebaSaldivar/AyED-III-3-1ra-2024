import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-componente-hijo',
  templateUrl: './componente-hijo.component.html',
  styleUrls: ['./componente-hijo.component.css']
})
export class ComponenteHijoComponent {

@Input() misEstudiantesHijo!: Estudiante[];
@Output() EventoEstudianteHijo: EventEmitter<Estudiante> = new EventEmitter<Estudiante>(); 


estudianteActual : Estudiante = {
  legajo : 0,
  nombre : '',
  apellido : '',
  carrera : '',
  regular : false,
  fecha_inscripcion : new Date(2023, 3, 22)
}

AgregarEstudiante(){
  console.log(this.estudianteActual)

  this.EventoEstudianteHijo.emit(this.estudianteActual)
}

}
