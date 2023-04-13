import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Socio } from '../../models/socio';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesSociosService {

   listaSocios: Socio[] = [];
   private socio$!: BehaviorSubject<Socio[]>;



  obtenerSocio$(): Array<Socio> {
    return this.listaSocios
  }

  agregarSocio$(socio: Socio): void {
    this.listaSocios.push(socio)
  }

  obtenerSocioObservable(): Observable<Socio[]> {
    return this.socio$.asObservable();
  }
  constructor(
    private http: HttpClient
  ){
    this.socio$ = new BehaviorSubject<Socio[]>(this.listaSocios);
  }


  obtenerSocio(): Observable<Socio[]>{
    return this.http.get<Socio[]>(`${environment.socioURL}/socio`);
  };

  agregarSocio(socio: Socio):Observable<Socio>  {
    return this.http.post<Socio>(`${environment.socioURL}/socio`,socio)
   };

  deleteSocio(socio: Socio): Observable<Socio> {
    return this.http.delete<Socio>(`${environment.socioURL}/socio/${socio.id}`)
  };

  editarSocio(socio: Socio): Observable<Socio> {
    return this.http.put<Socio>(`${environment.socioURL}/socio/${socio.id}`, socio)
  };
}
