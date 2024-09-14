import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Profesor } from 'src/app/profesor/models/profesor'
import { Observable, Subscription } from 'rxjs';
import { ProfesorService } from '../../services/profesor.service';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css'],
})
export class ListaProfesorComponent implements OnInit, OnDestroy {
  profesores!: Profesor[];
  profesores$!: Observable<Profesor[]>;
  profesoresFiltrado$!: Observable<Profesor[]>;
  tablaVisible = false;
  textoAFiltrar!: string;

  suscripcion!: Subscription;

  constructor(
    private dialog: MatDialog,
    private profesoresService: ProfesorService
  ) {
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
    //Por ahora declaro un objeto 'curso' literalmente para agregarlo hasta que rehaga mi dialog de Alta/Edición
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

  filtrarProfe(texto:string){
    this.profesoresFiltrado$ = this.profesoresService.getListaFiltrada(texto)
    this.profesoresFiltrado$.subscribe((profesores:Profesor[])=> {
      if(profesores.length ==0){
        this.tablaVisible = false
      }else{
        this.tablaVisible = true
      }
    }) 
    
  }

}
