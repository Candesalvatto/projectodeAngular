import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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

  constructor(
    private activatedRoute: ActivatedRoute,
    private servicesDeCursos: CursosServicesService,
    private router: Router
  ){}

ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((parametros) => {
    console.log(parametros);
    this.formulario = new FormGroup({
      cursoTitulo: new FormControl(parametros.get('cursoTitulo')),
      modalidad: new FormControl(parametros.get('modalidad')),
      duracion: new FormControl(parametros.get('duracion')),
      cupo: new FormControl(parametros.get('cupo' || false)),
      profesor: new FormControl(parametros.get('profesor')),
      clases: new FormControl(parametros.get('clases')),
      inicio: new FormControl(new Date(parametros.get('inicio') || '')),
    })
  })

}
editarCurso(){
  let curso: Curso = {
      id: this.formulario.value.id,
      titulo: this.formulario.value.titulo,
      modalidad: this.formulario.value.modalidad,
      duracion: this.formulario.value.duracion,
      cupo:this.formulario.value.cupo,
      profesor:this.formulario.value.profesor,
      clasesSemanales:this.formulario.value.clasesSemanales,
      fechaInicio:this.formulario.value.fechaInicio,
  }

  this.servicesDeCursos.editarCurso(curso);
  this.router.navigate(['formacion/editar', curso]);
}
}


