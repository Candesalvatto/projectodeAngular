// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Socio } from '../../models/socio'
// import { Observable } from 'rxjs';
// import { ServicesSociosService } from 'src/app/socios/service/services-socios.service';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import { socioState } from 'src/app/socios/state/socio-state.reducer';
// import { Store } from '@ngrx/store';
// import { agregarSocioState } from 'src/app/socios/state/socio-state.actions';


// @Component({
//   selector: 'app-form-socios',
//   templateUrl: './form-socios.component.html',
//   styleUrls: ['./form-socios.component.css']
// })
// export class FormSociosComponent implements OnInit{

//   formSocios!: FormGroup;
//   spanError!: string;
//   socios: Socio[]= [];
//   socio$!: Observable <Socio[]>;
//   listaSocios: Socio[] = [];



// constructor(
//   private activatedRoute: ActivatedRoute,
//   private router: Router,
//   private serviceDeSocios: ServicesSociosService,
//   private snackBar: MatSnackBar,
//   private store: Store <socioState>
// ){}


// ngOnInit(){
//   let regexCorreo: string ="^[^@]+@[^@]+\.[a-zA-Z]{2,}$";
//   this.socio$= this.serviceDeSocios.obtenerSocioObservable();
//   this.activatedRoute.paramMap.subscribe((parametros) => {
//   this.formSocios= new FormGroup({
//   id: new FormControl ('', []),
//   nombre: new FormControl ('', [Validators.required]),
//   apellido: new FormControl ('', [Validators.required]),
//   direccion: new FormControl ('', []),
//   dni: new FormControl ('', [Validators.required]),
//   pais: new FormControl ('', []),
//   ciudad: new FormControl ('', []),
//   codPostal: new FormControl ('', []),
//   telefono: new FormControl ('', []),
//   email: new FormControl ('', [Validators.email, Validators.pattern(regexCorreo), Validators.required]),
//   contrasena: new FormControl ('', [Validators.minLength(8), Validators.required]),
//   profesion: new FormControl ('', []),
//   cargo: new FormControl ('', []),
//   puesto: new FormControl ('', []),
//   matricula: new FormControl ('', [Validators.required]),
// });

// })

// }

// agregarSocio(){
//   let socioNuevo: Socio ={
//     id: this.formSocios.value.id,
//     nombre: this.formSocios.value.nombre,
//     apellido: this.formSocios.value.apellido,
//     direccion: this.formSocios.value.direccion,
//     dni: this.formSocios.value.dni,
//     pais: this.formSocios.value.pais,
//     ciudad: this.formSocios.value.ciudad,
//     codPostal: this.formSocios.value.codPostal,
//     telefono: this.formSocios.value.telefono,
//     email: this.formSocios.value.email,
//     contrasena: this.formSocios.value.contrasena,
//     profesion: this.formSocios.value.profesion,
//     cargo:this.formSocios.value.cargo,
//     puesto: this.formSocios.value.puesto,
//     matricula: this.formSocios.value.matricula,
// }

// this.store.dispatch(agregarSocioState({socio: socioNuevo}))
// // this.serviceDeSocios.agregarSocio(socioNuevo);
// // this.listaSocios.push(socioNuevo);
// // this.snackBar.open(`Felicitaciones! ${socioNuevo.nombre} ${socioNuevo.apellido} Ya eres socio de nuestra comunidad`,'', {duration: 2000} )
// // setTimeout(() => {
// //   this.router.navigate(['/inicio']);
// // }, 2000);
// }


// }

