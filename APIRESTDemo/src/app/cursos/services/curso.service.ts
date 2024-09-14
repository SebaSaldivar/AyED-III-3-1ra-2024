import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cursos } from '../models/cursos';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { env } from 'src/environment/environment';

@Injectable()
export class CursoService {

  constructor(
    private http: HttpClient
  ) {}

  ObtenerCursosObservable(): Observable<Cursos[]> {
    return this.http.get<Cursos[]>(`${env.apiURL}/cursos`)
      .pipe(
        catchError(this.handleError)
      );
  }

  AgregarCurso(curso: Cursos): Observable<Cursos> {
    return this.http.post<Cursos>(`${env.apiURL}/cursos`, curso)
      .pipe(
        catchError(this.handleError)
      );
  }

  EditarCurso(curso: Cursos): Observable<Cursos> {
    return this.http.put<Cursos>(`${env.apiURL}/cursos/${curso.id}`, curso)
      .pipe(
        catchError(this.handleError)
      );
  }

  EliminarCurso(curso: Cursos): Observable<Cursos> {
    return this.http.delete<Cursos>(`${env.apiURL}/cursos/${curso.id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Manejo de errores
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
    }

    // Puedes mostrar el error en la consola o manejarlo de otra forma
    console.error(errorMessage);
    
    // Retornamos un throwError para que pueda ser capturado por los componentes
    return throwError(() => new Error(errorMessage));
  }
}
