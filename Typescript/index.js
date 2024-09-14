// Declaración de variables
var _mensaje1 = "Hola TS";
var _mensaje2;
var _numero1;
var _numero2, _numero3;
var _opciones;
(function (_opciones) {
    _opciones[_opciones["si"] = 1] = "si";
    _opciones[_opciones["no"] = 2] = "no";
})(_opciones || (_opciones = {}));
// Asignaciones
_mensaje2 = "Chau TS";
_numero1 = 5;
_numero2 = 10;
_numero3 = _numero1 * _numero2;
// Arrays
var _pictures = ['Enero', 'Febrero', 'Marzo'];
// Funciones
function MostrarTS() {
    alert(_mensaje1);
    console.log("Hola mundo");
    console.log("MEnsaje 1", _mensaje1);
    console.log(_mensaje1 + "&" + _mensaje2);
    console.log("Resultado: " + _numero3);
    console.log("opciones: " + _opciones);
}
MostrarTS();
