export class Persona {
    private _nombre: string;
    private _edad: number;

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad;
    }

    get Nombre():string{
        return this._nombre;
    }

    get Edad():number{
        return this._edad;
    }

    set Nombre(nombre:string){
        this._nombre = nombre;
    }

    set Edad(edad:number){
        this._edad = edad;
    }

    imprimir() { console.log(`${this._nombre}!, Hola desde la clase Persona:`);
    }
     }