import { Estudiante } from "../Clases/estudiante";
import { ICurso } from "./ICurso";

// Implementación de la interfaz ICurso en la clase Curso
class Cursos implements ICurso {
    nombreCurso: string;
    estudiantes: Estudiante[];

    constructor(nombreCurso: string) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }
    fechaInicio: Date;

    // Implementación del método obtenerEstudiantes de la interfaz ICurso
    obtenerEstudiantes(): Estudiante[] {
        return this.estudiantes;
    }

    // Implementación del método agregarEstudiante de la interfaz ICurso
    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    }

    // Otros miembros y métodos de la clase Curso
    obtenerNumeroEstudiantes(): number {
        return this.estudiantes.length;
    }

    obtenerPromedioEdadEstudiantes(): number {
        let totalEdades = 0;
        for (const estudiante of this.estudiantes) {
            totalEdades += estudiante.Edad;
        }
        return totalEdades / this.estudiantes.length;
    }
}

// Uso de la clase Curso
const miCurso = new Cursos("Angular TN");

const estudiante1 = new Estudiante(4455, "Sistemas", "Marcos", 27);
const estudiante2 = new Estudiante(4445, "Sistemas", "Juan", 30);
const estudiante3 = new Estudiante(4425, "Sistemas", "Sandra", 20);

miCurso.agregarEstudiante(estudiante1);
miCurso.agregarEstudiante(estudiante2);
miCurso.agregarEstudiante(estudiante3);

console.log(miCurso.obtenerNumeroEstudiantes()); // ver ejecutando el comando 'node Interfaces/Cursos.js'
console.log(miCurso.obtenerPromedioEdadEstudiantes()); // ver ejecutando el comando 'node Interfaces/Cursos.js'




