import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, tap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as SocioStateActions from './socio-state.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesSociosService } from 'src/app/socios/service/services-socios.service';
import { agregarSocioState, editarSocioState, eliminarSocioState, finishSocioState, loadSocioStates } from './socio-state.actions';
import { Socio } from 'src/app/models/socio';
import { loadStateFeatures } from 'src/app/cursos/state/state-feature.actions';

@Injectable()
export class SocioStateEffects {
  cargaSocios$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(loadSocioStates),
      concatMap(()=>{
        return this.socio.obtenerSocio().pipe(
          map((socio: Socio[])=> finishSocioState ({socios: socio})),
          catchError((error) => of(errorSocioState({ error })))
        )
      })
    )
  });

  agregarSocio$= createEffect(() => {
    return this.actions$.pipe(
      ofType(agregarSocioState),
      concatMap(({ socio }) => {
        return this.socio.agregarSocio(socio).pipe(
          map((socioNuevo: Socio) => {
            this.snackBar.open(`Felicitaciones! ${socioNuevo.nombre} ${socioNuevo.apellido} Ya eres socio de nuestra comunidad`,'', {duration: 2000} )
            return loadSocioStates();
          }),
          catchError((error) => {
            return of({ type: 'ERROR_AGREGANDO_SOCIO' });
          })
        );
      })
    );
  });

  editarSocio$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(editarSocioState),
      concatMap(({ socio })=>{
        return this.socio.editarSocio(socio).pipe(
          map((socioActualizado: Socio)=>{
          this.snackBar.open(`${socioActualizado.nombre } editado satisfactoriamente`,'', {duration: 2000})
          return loadSocioStates()
  }),
  catchError((error) => {
    return of({ type: 'ERROR_ACTUALIZANDO_SOCIO' });
  })
      );
 } )
    )
  });

   eliminarSocio$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(eliminarSocioState),
      concatMap(({ socio })=>{
        return this.socio.deleteSocio(socio).pipe(
          map((socio: Socio)=>{
            this.snackBar.open(`${socio.nombre} eliminado satisfactoriamente`,'', {duration: 2000});
            setTimeout(() => {
            }, 2000);
            return loadSocioStates();

          })
        )
      })

    )
   });



  constructor(
    private actions$: Actions,
    private router: Router,
    private snackBar: MatSnackBar,
    private socio: ServicesSociosService) {}
}
function errorSocioState(arg0: { error: any; }): any {
  throw new Error('Function not implemented.');
}

