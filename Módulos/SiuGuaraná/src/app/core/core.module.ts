import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { EditarCursoDialogComponent } from './components/editar-curso-dialog/editar-curso-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    EditarCursoDialogComponent,
  ],
  imports: [ 
    SharedModule,
    AppRoutingModule
   ],
  exports: [
    ToolbarComponent,
    EditarCursoDialogComponent,
  ],
  providers: [],
})
export class CoreModule {}
