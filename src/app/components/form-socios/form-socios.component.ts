import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAlumnoService } from 'src/app/services/service-alumno.service';
import { Socio } from '../../models/socio'
import { Alumno } from '../../models/alumnos';
import { Observable, BehaviorSubject } from 'rxjs';
import { ServicesSociosService } from 'src/app/services/services-socios.service';


@Component({
  selector: 'app-form-socios',
  templateUrl: './form-socios.component.html',
  styleUrls: ['./form-socios.component.css']
})
export class FormSociosComponent implements OnInit{

  formSocios!: FormGroup;
  spanError!: string;
  socios: Socio[]= [];


constructor(
  private activatedRoute: ActivatedRoute,
  private router: Router,
  private servicesDeAlumnos: ServiceAlumnoService,
  private serviceDeSocios: ServicesSociosService,
){}


ngOnInit(){
  let regexCorreo: string ="^[^@]+@[^@]+\.[a-zA-Z]{2,}$";
  // this.alumno$ = this.servicesDeAlumnos.obtenerAlumno();
  this.activatedRoute.paramMap.subscribe((parametros) => {
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
})
})

}

agregarSocio(){
  let socioNuevo: Socio ={
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

this.serviceDeSocios.agregarSocio(socioNuevo);
console.log ('agregando socio nuevo', socioNuevo)


// this.socios.push(socioNuevo);
// console.log( 'nuevo socio', socioNuevo);
// if (this.formSocios.invalid){this.spanError= "Hay datos inválidos en el formulario"};
// if (this.formSocios.valid){console.log("FORMULARIO VALIDO");
// console.log(this.formSocios, 'SOCIO AGREGADO')};
}


}

