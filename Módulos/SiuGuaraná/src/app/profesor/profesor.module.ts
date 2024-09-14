import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';
import { ProfesorRoutingModule } from './profesor-routing.module';
import { ProfesorService } from './services/profesor.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListaProfesorComponent
  ],
  imports: [
    CommonModule,
    ProfesorRoutingModule,
    SharedModule,
  ],
  providers: [
    ProfesorService
  ]
})
export class ProfesorModule { }
