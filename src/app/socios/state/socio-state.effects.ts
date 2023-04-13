import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { concatMap, map } from 'rxjs/operators';
import { Observable, EMPTY } from 'rxjs';
import * as SocioStateActions from './socio-state.actions';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServicesSociosService } from 'src/app/socios/service/services-socios.service';
import { agregarSocioState, editarSocioState, eliminarSocioState, finishSocioState } from './socio-state.actions';
import { Socio } from 'src/app/models/socio';
import { loadStateFeatures } from 'src/app/cursos/state/state-feature.actions';

@Injectable()
export class SocioStateEffects {
  cargaSocios$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(loadStateFeatures),
      concatMap(()=>{
        return this.socio.obtenerSocio().pipe(
          map((socio: Socio[])=> finishSocioState ({socios: socio}))
        )
      })
    )
  });
  agregarSocio$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(agregarSocioState),
      concatMap(({socio})=>{
        return this.socio.agregarSocio(socio).pipe(
          map((socio:Socio)=>{
            this.snackBar.open(`${socio.nombre +''+ socio.apellido} agregado satisfactoriamente`,'', {duration: 2000})
            setTimeout(() => {
              this.router.navigate(['inicio']);
            }, 2000);
            return loadStateFeatures();
            })
        )
      })
    )
  });

  editarSocio$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(editarSocioState),
      concatMap(({ socio })=>{
return this.socio.editarSocio(socio).pipe(
  map((socio: Socio)=>{
    this.snackBar.open(`${socio.nombre +''+socio.apellido} editado satisfactoriamente`,'', {duration: 2000})
    this.router.navigate(['inicio']);
    return loadStateFeatures()
  })
)
      })
    )
  });

   eliminarSocio$= createEffect(()=>{
    return this.actions$.pipe(
      ofType(eliminarSocioState),
      concatMap(({ socio })=>{
        return this.socio.deleteSocio(socio).pipe(
          map((socio: Socio)=>{
            this.snackBar.open(`${socio.nombre +''+ socio.apellido} eliminado satisfactoriamente`,'', {duration: 2000});
            setTimeout(() => {
              this.router.navigate(['inicio']);
            }, 2000);
            return loadStateFeatures();

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
