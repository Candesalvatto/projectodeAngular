import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Curso } from 'src/app/models/cursos';


@Injectable()
export class CursosServicesService {


  private cursos: Curso[] = [
    {
      id: 1,
      titulo: "Tomografia Multislice",
      modalidad: "Teórico Presencial - Práctico",
      duracion: "7 meses",
      cupo: true,
      profesor: {
        nombre: 'Diego Sosa',
        curso: 'Tomografia Multislice',
        correo: 'cocososa@gmail.com'
      },
      clasesSemanales: 2,
      fechaInicio: new Date(2023, 2, 6, 20, 0, 0)
    },

    {
      id: 2,
      titulo: "Imagenología Mamaria",
      modalidad: "Teórico Presencial - Práctico",
      duracion: "5 meses",
      cupo: true,
      profesor: {
        nombre: 'Mirna Checa',
        curso: 'Imagenología Mamaria',
        correo: 'mirnecheca@gmail.com'
      },
      clasesSemanales: 1,
      fechaInicio: new Date(2023, 2, 15, 17, 30, 0)
    },
    {
      id: 3,
      titulo: "Radiología Pediátrica",
      modalidad: "Teórico Presencial",
      duracion: "3 meses",
      cupo: false,
      profesor: {
        nombre: 'Ricardo Perez',
        curso: 'Radiología Pediátrica',
        correo: 'patoperez@gmail.com'
      },
      clasesSemanales: 1,
      fechaInicio: new Date(2023, 3, 10, 19, 0, 0)
    }

  ];
  private cursos$!: BehaviorSubject<Curso[]>;

  constructor() { this.cursos$ = new BehaviorSubject <Curso[]> (this.cursos); }

  //funciones

  obtenerCursos(): Observable<Curso[]> {
    return this.cursos$.asObservable();
  }


  agregarCurso(curso: Curso): void {
    this.cursos.push(curso); // envia mi curso
    this.cursos$.next(this.cursos); //lo agrega al observable
    console.log("Nuevo curso agregado", this.cursos$);

  }

  deleteCurso(id: number):void {
    this.cursos = this.cursos.filter((curso: Curso) => curso.id != id);
    this.cursos$.next(this.cursos);
    console.log("Curso eliminado", this.cursos)
  }

  // deleteCurso(curso:Curso):void{
  //   let i = this.cursos.findIndex((c:Curso)=>{c.id === curso.id });
  //   if (i> -1){
  //     this.cursos.splice(i,1);
  //     this.cursos$.next(this.cursos)
  //   }
  // }

 editarCurso(curso: Curso):void {
  let i = this.cursos.findIndex((c:Curso)=>{c.id === curso.id });
  if (i > -1){
    this.cursos[i]=curso; //actualizo el indice donde encontre la coincidencia
    this.cursos$.next(this.cursos)} //hace next en el subject de curso

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
 }

