import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { InicioSesionService } from '../services/inicio-sesion.service';
import { Sesion } from '../../models/sesion';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth.reducer';
import { loadSesion } from '../auth.actions';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit, OnDestroy {

  formulario!: FormGroup;
  suscripcion!: Subscription

  constructor( private sesionService: InicioSesionService,
    private router: Router,
    private authStore: Store <AuthState>,
){}

  ngOnInit(): void {
    this.formulario= new FormGroup({
    usuario: new FormControl(),
    contrasena: new FormControl(),
    admin: new FormControl(),
  })};

ngOnDestroy(): void {
this.suscripcion.unsubscribe()
}

  iniciarSesion(){
    let user:User= {
      usuario:this.formulario.value.usuario,
      contraseña: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
    }
  this.suscripcion = this.sesionService.iniciarSesion(user).subscribe((sesion: Sesion)=>{
  this.authStore.dispatch(loadSesion({ sesion: sesion }));
  this.router.navigate(['inicio'])
}) ;
  }
}
