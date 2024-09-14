import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estudiante } from '../../models/estudiante';

@Component({
  selector: 'app-componente-padre',
  templateUrl: './componente-padre.component.html',
  styleUrls: ['./componente-padre.component.css']
})

export class ComponentePadreComponent {

  @Input() misEstudiantesPadre! : Estudiante[];
  @Output() EventoEstudiantePadre: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();

  constructor(){

  }

  ActualizarAlumnoPadre(estudiante:Estudiante){
  console.log("Desde el componente padre con la info desde Hijo");
  console.log(estudiante);
  this.EventoEstudiantePadre.emit(estudiante);
  }

}
