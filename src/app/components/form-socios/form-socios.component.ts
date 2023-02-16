import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-socios',
  templateUrl: './form-socios.component.html',
  styleUrls: ['./form-socios.component.css']
})
export class FormSociosComponent {
  formSocios: FormGroup;
  spanError!: string;


constructor(){
  let regexCorreo: string ="^[^@]+@[^@]+\.[a-zA-Z]{2,}$";
  let controles: any = {
  nombre: new FormControl ('', [Validators.required]),
  apellido: new FormControl ('', [Validators.required]),
  direccion: new FormControl ('', []),
  dni: new FormControl ('', [Validators.required]),
  pais: new FormControl ('', []),
  ciudad: new FormControl ('', []),
  codPostal: new FormControl ('', []),
  telefono: new FormControl ('', []),
  email: new FormControl ('', [Validators.email, Validators.pattern(regexCorreo), Validators.required]),
  contrasena: new FormControl ('', [Validators.minLength(8), Validators.required]),
  profesion: new FormControl ('', []),
  cargo: new FormControl ('', []),
  puesto: new FormControl ('', []),
  matricula: new FormControl ('', [Validators.required]),


}

this.formSocios = new FormGroup(controles);}

  asociarse(){
    if (this.formSocios.invalid){this.spanError= "Hay datos inválidos en el formulario"};
    if (this.formSocios.valid){console.log("FORMULARIO VALIDO")};
    console.log(this.formSocios);


    //PRUEBAS DE VALIDACION
  /*  if(this.formSocios.controls['nombre'].errors?.['required']){
      console.log("El nombre es obligatorio")};
      if(this.formSocios.controls['apellido'].errors?.['required']){
        console.log("El apellido es obligatorio")};
      if(this.formSocios.controls['dni'].errors?.['required']){
          console.log("El dni es obligatorio")};
      if(this.formSocios.controls['dni'].invalid){
          console.log("El dni es sumamente obligatorio")};
      if(this.formSocios.controls['email'].errors?.['pattern']){
              console.log("El email es invalido")};
      if(this.formSocios.controls['contrasena'].errors?.['minlength']){
        console.log("La contraseña es invalida")};
        if(this.formSocios.controls['contrasena'].errors?.['required']){
          console.log("La contraseña esta vacia")};
      if(this.formSocios.controls['matricula'].errors?.['required']){
          console.log("La matricula es obligatoria")};
*/

}
}
