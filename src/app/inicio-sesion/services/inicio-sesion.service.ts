import { Injectable } from '@angular/core';
import { LoguinService } from 'src/app/services/loguin.service';
import { User } from '../../models/user';
import { Sesion } from '../../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class InicioSesionService {

  constructor(private sesionService:LoguinService) {
  }

  iniciarSesion(user:User){
   let sesion:Sesion ={
    sesionActiva:true,
    usuarioActivo: user,
    actividad: false

   }
   this.sesionService.crearSesion(sesion);

  }

}
