import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Socio } from '../../models/socio';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesSociosService {

   private listaSocios: Socio[] = [];
   private socio$!: BehaviorSubject<Socio[]>

   constructor(
    private http: HttpClient
  ){

  }

  obtenerSocio$(): Array<Socio> {
    return this.listaSocios
  }

  agregarSocio$(socio: Socio): void {
    this.listaSocios.push(socio)
  }

  obtenerSocioObservable(): Observable<Socio[]> {
    return this.socio$.asObservable();
  }



  obtenerSocio(): Observable<Socio[]>{
    return this.http.get<Socio[]>(`${environment.socioURL}/socios`);
  };

  agregarSocio(socio: Socio):Observable<Socio>  {
    return this.http.post<Socio>(`${environment.socioURL}/socios`,socio)
   };

  deleteSocio(socio: Socio): Observable<Socio> {
    return this.http.delete<Socio>(`${environment.socioURL}/socios/${socio.id}`)
  };

  editarSocio(socio: Socio): Observable<Socio> {
    return this.http.put<Socio>(`${environment.socioURL}/socios/${socio.id}`, socio)
  };

}
