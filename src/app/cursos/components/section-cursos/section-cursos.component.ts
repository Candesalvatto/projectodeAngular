import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../../models/cursos';
import { Observable, Subscription } from 'rxjs';
import { CursosServicesService } from '../../services/cursos-services.service';
import { Router } from '@angular/router';
import { LoguinService } from 'src/app/inicio-sesion/services/loguin.service';
import { Sesion } from '../../../models/sesion';
import { EditarCursoComponent } from '../editar-curso/editar-curso.component';
import { MatDialog } from '@angular/material/dialog';
import { CursoState } from '../../state/state-feature.reducer';
import { Store } from '@ngrx/store';
import { eliminarCursoState } from '../../state/state-feature.actions';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-section-cursos',
  templateUrl: './section-cursos.component.html',
  styleUrls: ['./section-cursos.component.css']
})
export class SectionCursosComponent implements OnInit, OnDestroy{

      suscript!: Subscription;
      dataSource!: MatTableDataSource <Curso>;
      columnas: string[] = ['titulo', 'modalidad', 'duracion', 'cupo', 'profesor', 'clasesSemanales','fechaInicio','acciones'];
      curso!: Curso[];
      cursos$!:Observable<Curso[]>;
      sesion$!: Observable<Sesion>




      constructor(
        private servicesDeCursos:CursosServicesService,
        private router: Router,
        private sesionService: LoguinService,
        private dialog: MatDialog,
        private store: Store<CursoState>,
        private snackBar: MatSnackBar
      ){}


      ngOnInit(): void {
        this.cursos$ = this.servicesDeCursos.obtenerCursos();
        this.sesion$ = this.sesionService.obtenerSesion()


        this.dataSource = new MatTableDataSource<Curso>();
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
            this.store.dispatch(eliminarCursoState({ curso }));
            this.router.navigate(['formacion/tabla-de-cursos']);
      }
    }

