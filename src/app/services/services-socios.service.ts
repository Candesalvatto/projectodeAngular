import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Socio } from '../models/socio';

@Injectable({
  providedIn: 'root'
})
export class ServicesSociosService {

  listaSocios: Socio[] = [];
  private socio$!: BehaviorSubject<Socio[]>;

  constructor() { this.socio$ = new BehaviorSubject <Socio[]> (this.listaSocios); }

  obtenerSocio(): Array<Socio>{ return this.listaSocios;}

  agregarSocio(socio: Socio): void{
    this.listaSocios.push(socio)

      }

      obtenerSocioObservable(): Observable<Socio[]>{
        return this.socio$.asObservable();
      }

}
