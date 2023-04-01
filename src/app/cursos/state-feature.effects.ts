import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as StateFeatureActions from './state-feature.actions';
import { CursosServicesService } from './services/cursos-services.service';
import { agregarCursoState, finishStateFeatures, loadStateFeatures } from './state-feature.actions';
import { Curso } from '../models/cursos';
import { cursos } from '../services/data-cursos.service';
import { Router } from '@angular/router';

@Injectable()
export class StateFeatureCursosEffects {
  cargaCursos$ = createEffect(()=>{       //filtra la accion de load
    return this.actions$.pipe(
      ofType(loadStateFeatures),
      concatMap(()=>{
        return this.cursos.obtenerCursos().pipe(            //llama a obtener cursos y hace dispach de los cursos cargados
          map((curso: Curso[])=> finishStateFeatures ({cursos: curso}))
        )
      })
    )
  });
  agregarCurso$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(agregarCursoState),
      concatMap(({curso})=>{
        return this.cursos.agregarCurso(curso).pipe(
          map((curso:Curso)=>{
            this.router.navigate(['formacion/tabla-de-cursos']);
            return loadStateFeatures();
            })
        )
      })
    )
  });
  // editarCurso$= createEffect();
  // eliminarCurso$= createEffect();

constructor(
  private cursos: CursosServicesService,
  private actions$: Actions,
  private router: Router
){}


}
