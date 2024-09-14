import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cursos } from '../../models/cursos';
import { CursoService } from '../../services/curso.service';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/autenticacion/models/sesion';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import Swal from 'sweetalert2';
import { CursosDialogComponent } from '../cursos-dialog/cursos-dialog.component';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css'],
})
export class ListaCursosComponent implements OnInit {
  cursos!: Cursos[];
  cursos$!: Observable<Cursos[]>;
  sesion$!: Observable<Sesion>;

  constructor(
    private dialog: MatDialog,
    private MisCursosService: CursoService,
    private router: Router,
    private sesion: SesionService
  ) {}

  ngOnInit(): void {
    this.cursos$ = this.MisCursosService.ObtenerCursosObservable();
    this.sesion$ = this.sesion.obtenerSesion();
  }

  AgregarCurso() {
    Swal.fire('En construcción', 'Próximamente', 'info');
  }

  EliminarCurso(curso: Cursos) {
    this.MisCursosService.EliminarCurso(curso).subscribe({
      next: (curso: Cursos) => {
        Swal.fire(
          `Curso de ${curso.nombre} Comisión: ${curso.comision}`,
          'Curso eliminado!',
          'success'
        );
        // Actualizamos la lista de cursos
        this.cursos$ = this.MisCursosService.ObtenerCursosObservable();
      },
      error: (err) => {
        Swal.fire('Error', 'No se pudo eliminar el curso. Inténtelo nuevamente.', 'error');
        console.error('Error al eliminar el curso:', err);
      }
    });
  }

  abrirDialog(curso: Cursos) {
    this.dialog.open(CursosDialogComponent, {
      width: '500px',
      height: '500px',
      data: curso,
    })
    .afterClosed()
    .subscribe({
      next: (curso: Cursos) => {
        if (curso) {
          Swal.fire(
            `Curso de ${curso.nombre} Comisión: ${curso.comision}`,
            'Curso editado correctamente!',
            'success'
          );
          this.cursos$ = this.MisCursosService.ObtenerCursosObservable();
        }
      },
      error: (err) => {
        Swal.fire('Error', 'No se pudo editar el curso. Inténtelo nuevamente.', 'error');
        console.error('Error al editar el curso:', err);
      }
    });
  }
}
