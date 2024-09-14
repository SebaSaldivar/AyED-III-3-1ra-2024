// importación de clases
import { Estudiante } from "./estudiante";
import { Persona } from "./persona";

// Creación de una instancia u objeto de la clase Persona y Estudiante
let persona1: Persona = new Persona("Jose", 30);

let estudiante1: Estudiante = new Estudiante(1134, "TSAS", persona1.Nombre, persona1.Edad)

// Llamada a un método del objeto
persona1.imprimir(); // ver ejecutando el comando 'node Clases/objetos.js'