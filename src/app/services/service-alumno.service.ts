import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Alumno } from '../models/alumnos';

@Injectable({
  providedIn: 'root'
})
export class ServiceAlumnoService {

  listaAlumnos: Alumno[] = [
    {
      nombre: "Candela",
      apellido: "Salvatto",
      matriculado: true,
      socio: true
    },
    {
      nombre: "Victoria",
      apellido: "Rubiano",
      matriculado: true,
      socio: true
    },
    {
      nombre: "Tatiana",
      apellido: "Mattio",
      matriculado: true,
      socio: false
    },
    {
      nombre: "Federico",
      apellido: "Gallardo",
      matriculado: false,
      socio: true
    },
    {
      nombre: "Alan",
      apellido: "Bello",
      matriculado: true,
      socio: true
    },
    {
      nombre: "Katya",
      apellido: "Vidaurre",
      matriculado: false,
      socio: false
    }
  ];

  private alumno$!: BehaviorSubject<Alumno[]>;

  constructor() { }

  obtenerAlumno(): Array<Alumno>{
    return this.listaAlumnos;
  }


  obtenerAlumnoObservable(): Observable<Alumno[]>{

    return this.alumno$.asObservable();
  }


  agregarAlumno(alumno: Alumno){
    this.listaAlumnos.push(alumno);
    console.log('Alumno agregado', this.listaAlumnos);
  }




  }

