import { Profesor } from './profesor';

export interface Cursos {
  comision: number;
  nombre: string;
  profesor: Profesor;
  presencial: boolean;
  fechaInicio: Date;
}
