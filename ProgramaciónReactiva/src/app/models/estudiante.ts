import { Profesor } from './profesor';

export interface Estudiante {
  legajo: number;
  nombre: string;
  apellido: string;
  notaFinal: number;
  libre: boolean;
  profesor: Profesor;
  fechaAprobacion: Date;
}
