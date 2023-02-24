import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-nuevo-curso',
  templateUrl: './form-nuevo-curso.component.html',
  styleUrls: ['./form-nuevo-curso.component.css']
})
export class FormNuevoCursoComponent {

  formCursoNuevo: FormGroup;
  spanCongratulations!: string;

  constructor(){
    let controles:any ={
      titulo: new FormControl ('', [Validators.required]),
      modalidad: new FormControl ('', [Validators.required]),
      duracion:new FormControl ('', [Validators.required]),
      cupo:new FormControl ('', [Validators.required]),
      profesor:new FormControl ('', [Validators.required]),
      clases:new FormControl ('', [Validators.required]),
      inicio:new FormControl ('', [Validators.required]),
    }
    this.formCursoNuevo = new FormGroup(controles);}

  agregarCursoNuevo(){
    if (this.formCursoNuevo.valid){this.spanCongratulations= 'Felicidades! Tu curso ha sido agregado con éxito'};
    console.log('curso agregado con exito', this.formCursoNuevo);

  }
}
