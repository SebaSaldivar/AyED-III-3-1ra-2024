import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './components/pagina-no-encontrada/pagina-no-encontrada.component';

//const routes: Routes = [];

const routes: Routes = [
  {path: 'login', component: LoginComponent},       // localhost:4200/login -> login.component
  {path: 'inicio', component: InicioComponent},     // localhost:4200/inicio -> inicio.component
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: '**', component: PaginaNoEncontradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
