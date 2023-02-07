import { Component} from '@angular/core';
import { Curso } from '../../models/cursos';





@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.css']
})
export class Section3Component  {

  cursos: Curso[] = [
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
     cupo: true,
     profesor:{
       nombre: 'Ricardo Perez',
       curso: 'Radiología Pediátrica',
       correo: 'patoperez@gmail.com'
     },
     clasesSemanales: 1,
     fechaInicio: new Date (2023, 3, 10, 19, 0, 0)
   }

   ]



   }


