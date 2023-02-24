import { Component } from '@angular/core';
import { Curso } from '../../models/cursos';
import { CursosServicesService } from 'src/app/cursos/services/cursos-services.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor(
    private servicesDeCursos:CursosServicesService,

  ){};



  agregarCurso() {
    let cursoCreado: Curso = {
      id: 0,
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
