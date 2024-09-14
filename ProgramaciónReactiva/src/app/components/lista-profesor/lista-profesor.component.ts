import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from '../../services/profesor.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css'],
})
export class ListaProfesorComponent implements OnInit, OnDestroy {
  profesores!: Profesor[];

  profesores$!: Observable<Profesor[]>;
  
  public listaFiltrada: Profesor[];
  tablaVisible = false;

  suscripcion!: Subscription;

  constructor(
    private dialog: MatDialog,
    private profesoresService: ProfesorService
  ) {
    this.listaFiltrada = this.profesoresService.getListaFiltrada();
  }

  ngOnInit(): void {
    this.profesores$ = this.profesoresService.ObtenerProfeObservable();
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  EditarProfesor(curso: Profesor) {
    //Pendiente hasta que rehaga mi dialog de Alta/Edición
    alert('en construcción');
  }

  AgregarProfe() {
    //como ejemplo declaro un objeto 'curso' literalmente para agregarlo
    let unProfe = {
      nombre: 'Florencia',
      apellido: 'Marquez',
      materia: 'Angular',
    };
    this.profesoresService.AgregarProfe(unProfe);
  }

  EliminarProfe(profesor: Profesor) {
    this.profesoresService.EliminarProfe(profesor);
  }
}
