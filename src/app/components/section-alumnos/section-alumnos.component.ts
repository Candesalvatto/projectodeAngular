import { Component } from '@angular/core';
import {Alumno} from 'src/app/models/alumnos';

@Component({
  selector: 'app-section-alumnos',
  templateUrl: './section-alumnos.component.html',
  styleUrls: ['./section-alumnos.component.css']
})
export class SectionAlumnosComponent {
  
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
}
