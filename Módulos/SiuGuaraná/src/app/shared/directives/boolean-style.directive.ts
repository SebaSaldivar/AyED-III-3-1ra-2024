import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBooleanStyle]',
})
export class BooleanStyleDirective implements OnInit {

  @Input('appBooleanStyle') libre!: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}
 
  ngOnInit(): void {

    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '20px');
    this.renderer.setStyle(
      this.element.nativeElement,
      'padding',
      '5px 5px 5px 5px'
    );

    this.renderer.setStyle(
      this.element.nativeElement,
      'background-color',
      this.libre ? '#FFFF65' : '#36CD5D'
    ); /* "#F44336"  */

    // this.renderer.addClass(this.element.nativeElement, 'texto-verde') PARA AGREGAR UNA CLASE A LA ETIQUETA

  }
}
