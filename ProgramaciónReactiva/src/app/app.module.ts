import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { StudentsComponent } from './components/students/students.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BooleanToTextPipe } from './pipes/boolean-to-text.pipe';
import { BooleanStyleDirective } from './directives/boolean-style.directive';
import { UnionNombreApellidoPipe } from './pipes/union-nombre-apellido.pipe';
import { SizeTittleDirective } from './directives/size-tittle.directive';
import { ListaCursosComponent } from './components/lista-cursos/lista-cursos.component';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    StudentsComponent,
    EditarCursoDialogComponent,
    BooleanToTextPipe,
    BooleanStyleDirective,
    UnionNombreApellidoPipe,
    SizeTittleDirective,
    ListaCursosComponent,
    ListaProfesorComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
