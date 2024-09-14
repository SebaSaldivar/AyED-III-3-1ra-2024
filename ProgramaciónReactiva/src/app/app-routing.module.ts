import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';
import { StudentsComponent } from './components/students/students.component';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', component: InicioComponent },
  { path: 'listaAlumnos', component: StudentsComponent },
  { path: 'cursos', component: ListaCursosComponent },
  { path: 'profesores', component: ListaProfesorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
