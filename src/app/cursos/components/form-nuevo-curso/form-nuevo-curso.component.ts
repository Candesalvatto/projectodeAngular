import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/cursos';
import { CursosServicesService } from '../../services/cursos-services.service';

@Component({
  selector: 'app-form-nuevo-curso',
  templateUrl: './form-nuevo-curso.component.html',
  styleUrls: ['./form-nuevo-curso.component.css']
})
export class FormNuevoCursoComponent implements OnInit {

//   formCursoNuevo: FormGroup;
//   spanCongratulations!: string;

//   constructor(){
//     let controles:any ={
//       titulo: new FormControl ('', [Validators.required]),
//       modalidad: new FormControl ('', [Validators.required]),
//       duracion:new FormControl ('', [Validators.required]),
//       cupo:new FormControl ('', [Validators.required]),
//       profesor:new FormControl ('', [Validators.required]),
//       clases:new FormControl ('', [Validators.required]),
//       inicio:new FormControl ('', [Validators.required]),
//     }
//     this.formCursoNuevo = new FormGroup(controles);}

//   agregarCursoNuevo(){
//     if (this.formCursoNuevo.valid){this.spanCongratulations= 'Felicidades! Tu curso ha sido agregado con éxito'};
//     console.log('curso agregado con exito', this.formCursoNuevo);

//   }
// }
formCursoNuevo!: FormGroup;
  spanCongratulations!: string;
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
      this.formCursoNuevo = new FormGroup({
        id: new FormControl,
        titulo: new FormControl,
        modalidad: new FormControl,
        duracion: new FormControl,
        cupo: new FormControl,
        profesor: new FormControl,
        clasesSemanales: new FormControl,
        fechaInicio: new FormControl,
      })
    })

  }
  agregarCurso(){
    let cursoNuevo: Curso = {
      id: this.formCursoNuevo.value.id,
      titulo: this.formCursoNuevo.value.id,
      modalidad: this.formCursoNuevo.value.id,
      duracion: this.formCursoNuevo.value.id,
      cupo:this.formCursoNuevo.value.id,
      profesor:this.formCursoNuevo.value.id,
      clasesSemanales:this.formCursoNuevo.value.id,
      fechaInicio:this.formCursoNuevo.value.id,
  }
  this.servicesDeCursos.agregarCurso(cursoNuevo);
  this.router.navigate(['formacion/tabla-de-cursos', cursoNuevo]);
  if (this.formCursoNuevo.valid){this.spanCongratulations= 'Felicidades! Tu curso ha sido agregado con éxito'};
  console.log(cursoNuevo)
  }

}

