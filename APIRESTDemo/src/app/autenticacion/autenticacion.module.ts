import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { AuthInicioComponent } from './components/auth-inicio/auth-inicio.component';
import { AutenticacionRoutingModule } from './autenticacion-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AuthInicioComponent,
    LoginComponent
  ],

  imports: [
    CommonModule,
    AutenticacionRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
  ]
})
export class AutenticacionModule { }
