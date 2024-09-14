import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

    this.route.queryParams.subscribe((parametros: Params) => {
      const mensaje = parametros['mensaje'];
      const usuario = parametros['usuario'];
      // ahora se pueden operar estos valores
      console.log(mensaje, usuario);
    });
    
  }
  
}
