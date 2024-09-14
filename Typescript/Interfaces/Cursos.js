"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var estudiante_1 = require("../Clases/estudiante");
// Implementación de la interfaz ICurso en la clase Curso
var Cursos = /** @class */ (function () {
    function Cursos(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = [];
    }
    // Implementación del método obtenerEstudiantes de la interfaz ICurso
    Cursos.prototype.obtenerEstudiantes = function () {
        return this.estudiantes;
    };
    // Implementación del método agregarEstudiante de la interfaz ICurso
    Cursos.prototype.agregarEstudiante = function (estudiante) {
        this.estudiantes.push(estudiante);
    };
    // Otros miembros y métodos de la clase Curso
    Cursos.prototype.obtenerNumeroEstudiantes = function () {
        return this.estudiantes.length;
    };
    Cursos.prototype.obtenerPromedioEdadEstudiantes = function () {
        var totalEdades = 0;
        for (var _i = 0, _a = this.estudiantes; _i < _a.length; _i++) {
            var estudiante = _a[_i];
            totalEdades += estudiante.Edad;
        }
        return totalEdades / this.estudiantes.length;
    };
    return Cursos;
}());
// Uso de la clase Curso
var miCurso = new Cursos("Angular TN");
var estudiante1 = new estudiante_1.Estudiante(4455, "Sistemas", "Marcos", 28);
var estudiante2 = new estudiante_1.Estudiante(4445, "Sistemas", "Juan", 30);
var estudiante3 = new estudiante_1.Estudiante(4425, "Sistemas", "Sandra", 20);
miCurso.agregarEstudiante(estudiante1);
miCurso.agregarEstudiante(estudiante2);
miCurso.agregarEstudiante(estudiante3);
console.log("Cantidad de estudiantes inscriptos:", miCurso.obtenerNumeroEstudiantes()); // ver ejecutando el comando 'node Interfaces/Cursos.js'
console.log("Promedio de edad de los estudiantes:", miCurso.obtenerPromedioEdadEstudiantes()); // ver ejecutando el comando 'node Interfaces/Cursos.js'
