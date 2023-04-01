import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthState } from '../inicio-sesion/auth.reducer';
import { Sesion } from '../models/sesion';
import { LoguinService } from '../services/loguin.service';
import { selectorAuthState, selectorSesionState } from '../inicio-sesion/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild, CanLoad {



  constructor(
    private authStore: Store <AuthState>,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectorSesionState).pipe(
        map((sesion:Sesion)=>{
          if(sesion.usuarioActivo?.admin){
            return true
          } else {
          alert( 'Esta seccion es solo para Administrador'),
            this.router.navigate(['inicio-sesion'])
            return false}
        })
      ) ;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
