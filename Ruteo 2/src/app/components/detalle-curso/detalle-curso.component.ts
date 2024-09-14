import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  id!: string;

  constructor(
    private route: ActivatedRoute 
  ){    
  }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      // Puedes hacer lo que necesites con el valor del ID
      console.log("Captura del id de curso:" + this.id);
    });
}
}
