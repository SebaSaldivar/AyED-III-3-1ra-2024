"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importación de clases
var estudiante_1 = require("./estudiante");
var persona_1 = require("./persona");
// Creación de una instancia u objeto de la clase Persona y Estudiante
var persona1 = new persona_1.Persona("Jose", 30);
var estudiante1 = new estudiante_1.Estudiante(1134, "TSAS", persona1.Nombre, persona1.Edad);
// Llamada a un método del objeto
persona1.imprimir(); // ver ejecutando el comando 'node Clases/objetos.js'
