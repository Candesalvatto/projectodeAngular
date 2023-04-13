import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Socio } from 'src/app/models/socio';
import { ServicesSociosService } from 'src/app/socios/service/services-socios.service';
import { socioState } from '../../state/socio-state.reducer';
import { editarSocioState } from '../../state/socio-state.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-editar-socios',
  templateUrl: './editar-socios.component.html',
  styleUrls: ['./editar-socios.component.css']
})
export class EditarSociosComponent implements OnInit{

  formulario!: FormGroup;

  constructor(
    private servicesDeSocios: ServicesSociosService,
    private store: Store <socioState>,
    private dialogRef: MatDialogRef<EditarSociosComponent>,
    @Inject(MAT_DIALOG_DATA) public socio: Socio
  ){}

  ngOnInit(): void {
        this.formulario = new FormGroup({
          id: new FormControl (this.socio.id),
          nombre: new FormControl(this.socio.nombre),
          apellido: new FormControl(this.socio.apellido),
          direccion: new FormControl(this.socio.direccion),
          dni: new FormControl(this.socio.dni),
          pais: new FormControl(this.socio.pais),
          ciudad: new FormControl(this.socio.ciudad),
          codPostal: new FormControl(this.socio.codPostal),
          telefono: new FormControl(this.socio.telefono),
          email: new FormControl(this.socio.email),
          contrasena: new FormControl(this.socio.contrasena),
          profesion: new FormControl(this.socio.profesion),
          cargo: new FormControl(this.socio.cargo),
          puesto: new FormControl(this.socio.puesto),
          matricula: new FormControl(this.socio.matricula),
        });
}

editarSocio(){
  let socio: Socio = {
      id: this.formulario.value.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      direccion: this.formulario.value.direccion,
      dni: this.formulario.value.dni,
      pais: this.formulario.value.pais ,
      ciudad: this.formulario.value.ciudad,
      codPostal: this.formulario.value.codPostal,
      telefono: this.formulario.value.telefono,
      email: this.formulario.value.email,
      contrasena: this.formulario.value.contrasena,
      profesion: this.formulario.value.profesion,
      cargo: this.formulario.value.cargo,
      puesto: this.formulario.value.puesto,
      matricula: this.formulario.value.matricula,
  };
  this.store.dispatch(editarSocioState( { socio }));
  this.servicesDeSocios.editarSocio(socio).subscribe((socio:Socio)=>{
  this.dialogRef.close(socio)});
}
}
