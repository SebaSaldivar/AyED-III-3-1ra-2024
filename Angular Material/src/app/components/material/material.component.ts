import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/models/curso';
import { EditarCursoDialogComponent } from '../editar-curso-dialog/editar-curso-dialog.component';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent {

  cursos: Curso[] = [
    {nombre: 'Angular', comision: '49533', profesor: 'Jeff Bezos'},
    {nombre: 'Vue', comision: '42523', profesor: 'Bill Gates'},
    {nombre: 'NodeJS', comision: '42433', profesor: 'Martin McFly'},
    {nombre: 'React', comision: '49536', profesor: 'Elon Musk'},
  ];

  MidataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(this.cursos);
  columnas: string[] = ['nombre', 'comision', 'profesor', 'acciones'];

  constructor(
    private dialog: MatDialog
  ){

  }

  abrirModal(curso: Curso){
    const dialogRef = this.dialog.open(EditarCursoDialogComponent, {
      data: curso
    });
  }
}
