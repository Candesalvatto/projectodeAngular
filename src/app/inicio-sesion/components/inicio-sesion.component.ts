import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { InicioSesionService } from '../services/inicio-sesion.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {

  formulario!: FormGroup;

  constructor( private sesionService: InicioSesionService,
    private router: Router,){}

  ngOnInit(): void {
    this.formulario= new FormGroup({
    usuario: new FormControl(),
    contrasena: new FormControl(),
    admin: new FormControl(),
  })};

  iniciarSesion(){
    let user:User= {
      usuario:this.formulario.value.usuario,
      contraseña: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    }
this.sesionService.iniciarSesion(user);
this.router.navigate(['inicio'])
  }
}
