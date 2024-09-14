"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
var persona_1 = require("./persona");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    //Puede recibir una instancia de persona en el constructor:
    //constructor(legajo:number, carrera:string, persona:Persona){
    //super( persona.Nombre, persona.Edad );
    function Estudiante(legajo, carrera, nombre, edad) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.legajo = legajo;
        _this.carrera = carrera;
        return _this;
    }
    return Estudiante;
}(persona_1.Persona));
exports.Estudiante = Estudiante;
