
// Declaración de variables
let _mensaje1 = "Hola TS";
let _mensaje2: string;   
let _numero1: number;
let _numero2, _numero3: number;

enum _opciones{
    si = 1,
    no = 2
}

// Asignaciones
_mensaje2 = "Chau TS";
_numero1 = 5;
_numero2 = 10;
_numero3 = _numero1*_numero2;

// Arrays
let _pictures: Array<string> = ['Enero','Febrero', 'Marzo'] 

// Funciones
function MostrarTS(){
    alert(_mensaje1)
    console.log("Hola mundo");
    console.log("MEnsaje 1", _mensaje1);
    console.log(_mensaje1 + "&" + _mensaje2);
    console.log("Resultado: " + _numero3);
    console.log("opciones: " + _opciones);

}

MostrarTS();