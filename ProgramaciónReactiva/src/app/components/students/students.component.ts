import { Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Estudiante } from 'src/app/models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';
import { AlumnosService } from '../../services/alumnos.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit, OnDestroy {
  dataSource1 = new AlumnosService();

  suscripcion!: Subscription;

  estudiante$!: Observable<Estudiante[]>;

  estudiante1: Estudiante = {
    legajo: 0,
    nombre: '',
    apellido: '',
    profesor: {
      nombre: '',
      apellido: '',
      materia: '',
    },
    notaFinal: 0,
    libre: false,
    fechaAprobacion: new Date(0, 0, 0),
  };

  dataSource!: MatTableDataSource<Estudiante>;

  columnas: string[] = [
    'legajo',
    'nombre',
    'notaFinal',
    'libre',
    'nombreProfesor',
    'materiaProfesor',
    'fechaAprobacion',
    'acciones',
  ];

  constructor(
    private dialog: MatDialog,
    private MisAlumnosService: AlumnosService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>();
    this.suscripcion =
      this.MisAlumnosService.ObtenerAlumnosObservable().subscribe(
        (alumnos: Estudiante[]) => {
          this.dataSource.data = alumnos;
        }
      );
  }

  EditarAlumno(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: estudiante,
    });

    dialogRef.afterClosed().subscribe((est) => {
      let unEstudiante: Estudiante = {
        legajo: est.value.legajo,
        nombre: est.value.nombre,
        apellido: est.value.apellido,
        notaFinal: est.value.notaFinal,
        libre: est.value.libre,
        profesor: {
          nombre: est.value.nombreProfesor,
          apellido: est.value.apellidoProfesor,
          materia: est.value.materiaProfesor,
        },
        fechaAprobacion: est.value.fechaAprobacion,
      };

      this.MisAlumnosService.EditarAlumno(unEstudiante);
    });
  }

  AgregarAlumno() {
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: this.estudiante1,
    });
    let LegajoAutomatico = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    dialogRef.afterClosed().subscribe((est) => {
      this.estudiante1.legajo = LegajoAutomatico;
      this.estudiante1.nombre = est.value.nombre;
      this.estudiante1.apellido = est.value.apellido;
      this.estudiante1.notaFinal = est.value.notaFinal;
      this.estudiante1.profesor.nombre = est.value.nombreProfesor;
      this.estudiante1.profesor.apellido = est.value.apellidoProfesor;
      this.estudiante1.profesor.materia = est.value.materiaProfesor;
      this.estudiante1.fechaAprobacion = est.value.fechaAprobacion;
      this.estudiante1.libre = est.value.libre;

      this.MisAlumnosService.AgregarAlumno(this.estudiante1);
    });
  }

  EliminarAlumno(estudiante: Estudiante) {
    this.MisAlumnosService.EliminarAlumno(estudiante);
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
