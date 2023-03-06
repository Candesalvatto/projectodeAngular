import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Socio } from '../../models/socio'


@Component({
  selector: 'app-form-socios',
  templateUrl: './form-socios.component.html',
  styleUrls: ['./form-socios.component.css']
})
export class FormSociosComponent implements OnInit{

  formSocios!: FormGroup;
  spanError!: string;
socios!: Socio[]


ngOnInit(){
  let regexCorreo: string ="^[^@]+@[^@]+\.[a-zA-Z]{2,}$";
  this.formSocios= new FormGroup({
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


});
}

asociarse(){
  console.log(this.formSocios.value);
  let socio: Socio ={
    nombre: this.formSocios.value.nombre,
    apellido: this.formSocios.value.apellido,
    direccion: this.formSocios.value.direccion,
    dni: this.formSocios.value.dni,
    pais: this.formSocios.value.pais,
    ciudad: this.formSocios.value.ciudad,
    codPostal: this.formSocios.value.codPostal,
    telefono: this.formSocios.value.telefono,
    email: this.formSocios.value.email,
    contrasena: this.formSocios.value.contrasena,
    profesion: this.formSocios.value.profesion,
    cargo:this.formSocios.value.cargo,
    puesto: this.formSocios.value.puesto,
    matricula: this.formSocios.value.matricula,
}
this.socios.push(socio);
console.log( 'nuevo socio', socio);
if (this.formSocios.invalid){this.spanError= "Hay datos inválidos en el formulario"};
if (this.formSocios.valid){console.log("FORMULARIO VALIDO");
console.log(this.formSocios, 'SOCIO AGREGADO')};
}


}

