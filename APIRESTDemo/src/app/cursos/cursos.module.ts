import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursoService } from './services/curso.service';
import { SharedModule } from '../shared/shared.module';
import { CursosDialogComponent } from './components/cursos-dialog/cursos-dialog.component';


@NgModule({
  declarations: [
ListaCursosComponent,
CursosDialogComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    SharedModule,
  ],
  providers: [
    CursoService
  ]
})
export class CursosModule { }
