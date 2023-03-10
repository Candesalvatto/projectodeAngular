import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LoguinService } from './services/loguin.service';
import { Sesion } from './models/sesion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'course-project';
  sesion$!: Observable <Sesion>


  constructor(
    private router: Router,
    private sesion: LoguinService,

  ){};

ngOnInit(): void {
  this.sesion$= this.sesion.obtenerSesion();
}

irInicio(){
  this.router.navigate(['inicio'])

}
cerrarSesion(){
  let sesionCerrada: Sesion = {
    sesionActiva: false,
    usuarioActivo: undefined,
    actividad: true,
  }
  this.sesion.cerrarSesion(sesionCerrada);
  this.router.navigate(['inicio-sesion']);
}
}


