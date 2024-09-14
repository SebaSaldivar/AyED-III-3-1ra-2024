import { Persona } from "./persona";

export class Estudiante extends Persona{
    legajo: number;
    carrera: string;

    //Puede recibir una instancia de persona en el constructor:
    //constructor(legajo:number, carrera:string, persona:Persona){
        //super( persona.Nombre, persona.Edad );
        constructor(legajo:number, carrera:string, nombre: string, edad: number){ 
        super( nombre, edad );
        this.legajo = legajo;
        this.carrera = carrera;
    }
}