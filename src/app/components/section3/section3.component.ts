import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from '../../models/cursos';
import { ServiceCursosService } from 'src/app/services/service-cursos.service';
import { Subscription, Observable } from 'rxjs';


@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component implements OnInit, OnDestroy{

  cursos!:Curso[];
  suscript!: Subscription;
  cursos$!:Observable<Curso[]>

  constructor(
    private servicesDeCursos:ServiceCursosService

  ){}



ngOnInit(): void {
  //this.cursos = this.servicesDeCursos.obtenerCursos();
//this.servicesDeCursos.obtenerCursos().then((cursos:Curso[])=>{
//this.cursos = cursos;
//console.log('Promesa resuelta');
 //}).catch((error:any)=>{ console.log('Error en la promesa', error)})
  this.servicesDeCursos.obtenerCursosObservable().subscribe((cursos:Curso[])=>{

  this.cursos$=this.servicesDeCursos.obtenerCursosObservable();
  this.cursos$.subscribe(()=>{  this.cursos= cursos;})
 })
}

ngOnDestroy(){
  this.suscript.unsubscribe();
}
}


