import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';
import { SesionGuard } from '../core/guards/sesion.guard';

const routes: Routes = [
    { path: '', canLoad:[SesionGuard], component: StudentsComponent }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EstudiantesRoutingModule {}
