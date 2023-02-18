import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, from, filter } from 'rxjs';
import { Curso } from '../models/cursos';

@Injectable({
  providedIn: 'root'
})
export class ServiceCursosService {





private  cursos: Curso[] = [
    { titulo: "Tomografia Multislice",
     modalidad: "Teórico Presencial - Práctico",
     duracion: "7 meses",
     cupo: true,
     profesor:{
       nombre: 'Diego Sosa',
       curso: 'Tomografia Multislice',
       correo: 'cocososa@gmail.com'
     },
     clasesSemanales: 2,
     fechaInicio: new Date (2023, 2, 6, 20, 0, 0)
   },

     { titulo: "Imagenología Mamaria",
     modalidad: "Teórico Presencial - Práctico",
     duracion: "5 meses",
     cupo: true,
     profesor:{
       nombre: 'Mirna Checa',
       curso: 'Imagenología Mamaria',
       correo: 'mirnecheca@gmail.com'
     },
     clasesSemanales: 1,
     fechaInicio: new Date (2023, 2, 15, 17, 30, 0)
   },
     { titulo: "Radiología Pediátrica",
     modalidad: "Teórico Presencial",
     duracion: "3 meses",
     cupo: false,
     profesor:{
       nombre: 'Ricardo Perez',
       curso: 'Radiología Pediátrica',
       correo: 'patoperez@gmail.com'
     },
     clasesSemanales: 1,
     fechaInicio: new Date (2023, 3, 10, 19, 0, 0)
   }

   ];

   private cursos$!: BehaviorSubject<Curso[]>;

  constructor() { this.cursos$ = new BehaviorSubject(this.cursos);

    //filter
  from (this.cursos).pipe(
    filter((cursos:Curso)=>cursos.cupo ==false)
    ).subscribe((cursos)=>{console.log (cursos)})


}


  //metodo para obtener la info
 obtenerCursos(): Curso[]{
  return this.cursos;
  }


  evaluarCupo(): Promise<Curso[]>{
    return new Promise((resolve, reject) => {
      if(this.cursos[2].cupo == true){
        resolve(this.cursos);
      }else{
        reject();
      }
    });
  }




  obtenerCursosObservable(): Observable<Curso[]>{
    //return new Observable<Curso[]>((suscript)=>{ suscript.next(this.cursos)})
    return this.cursos$.asObservable();
  }


  agregarCurso(curso: Curso){
    this.cursos.push(curso);
    this.cursos$.next(this.cursos);
    console.log("Nuevo curso agregado", this.cursos);

  }
}
