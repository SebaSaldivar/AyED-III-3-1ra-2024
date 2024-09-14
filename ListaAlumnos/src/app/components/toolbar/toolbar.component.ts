import { Component } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

profesorActual: Profesor = {
  nombre: 'Sebastián',
  apellido: 'Saldívar',
  materia: 'Angular',
}
}
