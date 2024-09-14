import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';


const routes: Routes = [
/*   { path: '', redirectTo: 'inicio', pathMatch: 'full' }, */
  { path: 'profesores', component: ListaProfesorComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorRoutingModule {}
