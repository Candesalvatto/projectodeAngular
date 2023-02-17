import { Component } from '@angular/core';
import { ServiceCursosService } from 'src/app/services/service-cursos.service';
import { Curso } from '../app/models/cursos';
import {ServiceAlumnoService} from 'src/app/services/service-alumno.service';
import { Alumno } from '../app/models/alumnos';
import { cursos } from 'src/app/services/data-cursos.service';
import { from } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';

  constructor(
    private servicesDeCursos:ServiceCursosService
  ){};


agregarCurso() {
  let cursoCreado: Curso = {
    titulo: 'Nuevo Curso',
    modalidad: 'Indefinido',
    duracion: 'Indefinido',
    cupo: false,
    profesor: {
      nombre: 'Indefinido',
      curso: 'Nuevo Curso',
      correo: ''
    },
    clasesSemanales: 0,
    fechaInicio: new Date,
  };


this.servicesDeCursos.agregarCurso(cursoCreado);
}
}


