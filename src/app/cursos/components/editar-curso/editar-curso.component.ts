import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/cursos';
import { CursosServicesService } from '../../services/cursos-services.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit {

  formulario!: FormGroup;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicesDeCursos: CursosServicesService,
    private router: Router
  ){}

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((parametros) => {
    console.log (parametros);
    this.formulario = new FormGroup({
      id: new FormControl (parametros.get('id')),
      titulo: new FormControl(parametros.get('titulo')),
      modalidad: new FormControl(parametros.get('modalidad')),
      duracion: new FormControl(parametros.get('duracion')),
      cupo: new FormControl(parametros.get('cupo' || false)),
      profesor: new FormControl(parametros.get('profesor')),
      clasesSemanales: new FormControl(parametros.get('clasesSemanales')),
      fechaInicio: new FormControl(new Date(parametros.get('fechaInicio') || '')),
    });

  })

}
editarCurso(){
  let curso: Curso = {
      id: this.formulario.value.id,
      titulo: this.formulario.value.titulo,
      modalidad: this.formulario.value.modalidad,
      duracion: this.formulario.value.duracion,
      cupo:this.formulario.value.cupo,
      profesor: {
        nombre: 'Lucrecia',
        curso: 'Puncion estereotaxica',
        correo: 'lballa@gmail.com'
      },
      clasesSemanales:this.formulario.value.clasesSemanales,
      fechaInicio:this.formulario.value.fechaInicio,
  }

  this.servicesDeCursos.editarCurso(curso);
  this.router.navigate(['formacion/tabla-de-cursos', curso]);
  this.router.navigate(['formacion/cards', curso]);
}
}



