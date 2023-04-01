import { Component, OnInit, OnDestroy } from '@angular/core';
import { Curso } from '../../../models/cursos';
import { Subscription, Observable } from 'rxjs';
import { CursosServicesService } from '../../services/cursos-services.service';
import { LoguinService } from 'src/app/services/loguin.service';
import { Sesion } from 'src/app/models/sesion';
import { selectorCursosCargados, selectorCargandoCursos } from '../../state-feature.selectors';
import { loadStateFeatures, finishStateFeatures } from '../../state-feature.actions';
import { Store } from '@ngrx/store';
import { CursoState } from 'src/app/cursos/state-feature.reducer';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class cardsComponent implements OnInit, OnDestroy{

  cursos!:Curso[];
  suscript!: Subscription;
  cursos$!:Observable<Curso[]>;
  sesion$!: Observable<Sesion>;
  loadind$!: Observable<Boolean>;

  constructor(
    private servicesDeCursos:CursosServicesService,
    private sesionService: LoguinService,
    private store: Store<CursoState>

  ){}



ngOnInit(): void {
  //this.loadind$ =this.store.select(selectorCargandoCursos); //cargo el spiner
  this.store.dispatch(loadStateFeatures()); // actualizo mi cursoState
// this.servicesDeCursos.obtenerCursos().subscribe((cursos: Curso[])=> {  //obtengo los cursos, me suscribo
//   this.store.dispatch(finishStateFeatures({cursos: cursos})) // paso la info de los cursos q tengo cargados
// });
this.sesion$ = this.sesionService.obtenerSesion();
//this.cursos$= this.store.select(selectorCursosCargados);

}

ngOnDestroy(){
  this.suscript.unsubscribe();
}
}


