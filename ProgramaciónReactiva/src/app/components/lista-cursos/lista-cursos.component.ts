import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';
import { Cursos } from '../../models/cursos';
import { CursoService } from '../../services/curso.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  cursos!: Cursos[];

  constructor(
    private dialog: MatDialog,
    private MisCursosService: CursoService
  ) {}
 
  ngOnInit(){
    console.log("Paso 1")
    this.MisCursosService.ObtenerCursosPromise()
    .then((curso: Cursos[]) => {
        console.log("Paso 2")
        this.cursos = curso;
      })
      .catch((error: any[]) => {
        alert(error);
      }); 
      console.log("Paso 3")
  }

/*   async ngOnInit(): Promise<any> {
    try {
      this.cursos = await this.MisCursosService.ObtenerCursosPromise();
      console.log("Promesa síncrona")
    } catch (error) {
      alert(error);
    }
  }  */


  EditarCurso(curso: Cursos) {
    //Pendiente hasta que rehaga mi dialog de Alta/Edición
    alert('en construcción');
  }

  AgregarCurso() {
    //Por ahora declaro un objeto 'curso' literalmente para agregarlo hasta que rehaga mi dialog de Alta/Edición
    let unCurso = {
      comision: 17858,
      nombre: 'JavaScript',
      profesor: {
        nombre: 'Florencia',
        apellido: 'Marquez',
        materia: 'Angular',
      },
      presencial: true,
      fechaInicio: new Date(2023, 2, 11),
    };
    this.MisCursosService.AgregarCurso(unCurso);
  }

  EliminarCurso(curso: Cursos) {
    this.MisCursosService.EliminarCurso(curso);
  }
}
