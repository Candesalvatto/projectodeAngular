import { Directive, OnInit, Input, ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirectivaEstilos]'
})
export class DirectivaEstilosDirective implements OnInit{

@Input('appDirectivaEstilos') inscripcionAbierta!: boolean;

  constructor(
    private element: ElementRef,
) {
   }



   ngOnInit(): void {
this.element.nativeElement.style.color= 'grey';
  }

}

