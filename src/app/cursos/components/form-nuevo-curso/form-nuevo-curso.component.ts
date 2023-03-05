import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/cursos';
import { Profesor } from 'src/app/models/profesores';
import { CursosServicesService } from '../../services/cursos-services.service';
import { ProfesorServiceService } from '../../services/profesor-service.service';

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
profesor$!: Observable<Profesor[]>;



  constructor(
    private activatedRoute: ActivatedRoute,
    private servicesDeCursos: CursosServicesService,
    private router: Router,
    private profesores: ProfesorServiceService
  ){}


  ngOnInit(): void {
    this.profesor$ = this.profesores.obtenerProfesor();
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.formCursoNuevo = new FormGroup({
        titulo: new FormControl(''),
        modalidad: new FormControl(''),
        duracion: new FormControl(''),
        cupo: new FormControl(false),
        profesor: new FormControl({}),
        clasesSemanales: new FormControl(''),
        fechaInicio: new FormControl(''),
      })
    })

  }
  agregarCurso(){
    let cursoNuevo: Curso = {
      id: '',
      titulo: this.formCursoNuevo.value.titulo,
      modalidad: this.formCursoNuevo.value.modalidad,
      duracion: this.formCursoNuevo.value.duracion,
      cupo:this.formCursoNuevo.value.cupo,
      profesor:this.formCursoNuevo.value.profesor,
      clasesSemanales:this.formCursoNuevo.value.clasesSemanales,
      fechaInicio:this.formCursoNuevo.value.fechaInicio,
  }

  this.servicesDeCursos.agregarCurso(cursoNuevo).subscribe((curso: Curso) => {
    ///if (this.formCursoNuevo.valid){this.spanCongratulations= 'Felicidades! Tu curso ha sido agregado con éxito'};
    console.log(cursoNuevo)
    this.router.navigate(['formacion/tabla-de-cursos']);
  });
//   this.servicesDeCursos.agregarCurso(cursoNuevo);
//  this.router.navigate(['formacion/tabla-de-cursos', cursoNuevo]);
//   if (this.formCursoNuevo){this.spanCongratulations= 'Felicidades! Tu curso ha sido agregado con éxito'};
//   console.log(cursoNuevo)
  }


}

