import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const EMAIL_PATTERN = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/i;


@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {

  formularioReactivo!: FormGroup;

  constructor(){

  let controles: any = {
  correo: new FormControl('',[Validators.required, Validators.pattern(EMAIL_PATTERN)]),
  contrasena: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
  recordar: new FormControl(false, []),
 }

 this.formularioReactivo = new FormGroup(controles);

  }

 /*  formularioLogin(){
    if(this.formularioReactivo.valid){
      alert("Bienvenido!!!")
    }
  } */

  formularioLogin = () => this.formularioReactivo.valid ? alert("Bienvenido!!!") : null;


}
