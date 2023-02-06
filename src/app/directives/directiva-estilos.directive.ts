import { Directive, OnInit, Input, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirectivaEstilos]'
})
export class DirectivaEstilosDirective implements OnInit{

  @Input('appDirectivaEstilos') cupo!: boolean;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {
   }



   ngOnInit(): void {
    console.log(this.cupo);

    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.element.nativeElement,'background-color',this.cupo ? '#424242' : '#00408F');
  }

}

