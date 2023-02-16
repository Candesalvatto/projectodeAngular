import { Directive, OnInit, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirectivaEstilos]'
})
export class DirectivaEstilosDirective implements OnInit{

@Input('appDirectivaEstilos') inscripcionAbierta!: boolean;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {
   }



   ngOnInit(): void {


    this.renderer.setStyle(this.element.nativeElement, 'color', this.inscripcionAbierta ? 'orange' : 'grey');
  }

}

