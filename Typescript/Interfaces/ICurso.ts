import { Estudiante } from "../Clases/estudiante";

export interface ICurso {
    fechaInicio: Date;
    nombreCurso: string;
    estudiantes: Estudiante[];
}