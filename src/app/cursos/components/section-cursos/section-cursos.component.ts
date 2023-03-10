import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../../models/cursos';
import { Observable, Subscription } from 'rxjs';
import { CursosServicesService } from '../../services/cursos-services.service';
import { Router } from '@angular/router';
import { LoguinService } from 'src/app/services/loguin.service';
import { Sesion } from '../../../models/sesion';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-section-cursos',
  templateUrl: './section-cursos.component.html',
  styleUrls: ['./section-cursos.component.css']
})
export class SectionCursosComponent implements OnInit, OnDestroy{

      suscript!: Subscription;
      //promesa= this.servicesDeCursos.evaluarCupo();
      dataSource!: MatTableDataSource <Curso>;
      columnas: string[] = ['titulo', 'modalidad', 'duracion', 'cupo', 'profesor', 'clasesSemanales','fechaInicio','acciones'];
      curso!: Curso[];
      cursos$!:Observable<Curso[]>;
      sesion$!: Observable<Sesion>




      constructor(
        private servicesDeCursos:CursosServicesService,
        private router: Router,
        private sesionService: LoguinService,
        private dialog: MatDialog
      ){}


      ngOnInit(): void {
        this.cursos$ = this.servicesDeCursos.obtenerCursos();
        this.sesion$ = this.sesionService.obtenerSesion()

        //this.cursos = this.servicesDeCursos.obtenerCursos();
        this.dataSource = new MatTableDataSource<Curso>();
        // this.servicesDeCursos.obtenerCursos().subscribe((cursos:Curso[])=>{
        // this.dataSource.data=cursos;
        // this.sesionService.obtenerSesion().subscribe((sesion:Sesion)=> console.log('Estado de la sesion', sesion));
        // let i = this.dataSource.data.findIndex((curso: Curso) => curso.id == cursos[0].id);
        // this.dataSource.data[i] = cursos[0];});
       // this.promesa.then((curso)=>{
        //   console.log('Tiene cupo abierto')
        // }).catch(()=>{
        //   console.log('Cupo cerrado / Quitar curso si su cupo no esta disponible')
        // });
        // this.cursos$ = this.servicesDeCursos.obtenerCursos();
        // this.sesion$ = this.sesionService.obtenerSesion();
        this.suscript = this.servicesDeCursos.obtenerCursos().subscribe((cursos: Curso[]) => {
          console.log("Datos de la tabla de cursos");
          this.dataSource.data = cursos;
        });
      }
      ngOnDestroy(){
        this.suscript.unsubscribe();
      }


      goEdit(curso:Curso){
        this.dialog.open(EditarCursoComponent, {
          data: curso
        }).afterClosed().subscribe((curso: Curso) => {
          this.cursos$ = this.servicesDeCursos.obtenerCursos();
        });
      };

      deleteCurso(curso:Curso) {
        this.servicesDeCursos.deleteCurso(curso).subscribe((curso: Curso) => {
        //  this.cursos$ = this.servicesDeCursos.obtenerCursos();
        this.ngOnInit();
      })

    }
  }
