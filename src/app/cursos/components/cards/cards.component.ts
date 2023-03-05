import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from '../../../models/cursos';
import { Subscription, Observable } from 'rxjs';
import { CursosServicesService } from '../../services/cursos-services.service';
import { LoguinService } from 'src/app/services/loguin.service';
import { Sesion } from 'src/app/models/sesion';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class cardsComponent implements OnInit, OnDestroy{

  cursos!:Curso[];
  suscript!: Subscription;
  cursos$!:Observable<Curso[]>;
  sesion$!: Observable<Sesion>

  constructor(
    private servicesDeCursos:CursosServicesService,
    private sesionService: LoguinService

  ){}



ngOnInit(): void {
  //this.cursos = this.servicesDeCursos.obtenerCursos();
//this.servicesDeCursos.obtenerCursos().then((cursos:Curso[])=>{
//this.cursos = cursos;
//console.log('Promesa resuelta');
 //}).catch((error:any)=>{ console.log('Error en la promesa', error)})
//   this.servicesDeCursos.obtenerCursosObservable().subscribe((cursos:Curso[])=>{

//   this.cursos$=this.servicesDeCursos.obtenerCursosObservable();
//   this.cursos$.subscribe(()=>{  this.cursos= cursos;});
//   this.sesionService.obtenerSesion().subscribe((sesion:Sesion)=> console.log('Estado de la sesion', sesion));
//  })
this.cursos$ = this.servicesDeCursos.obtenerCursos();
this.sesion$ = this.sesionService.obtenerSesion();
}

ngOnDestroy(){
  this.suscript.unsubscribe();
}
}


