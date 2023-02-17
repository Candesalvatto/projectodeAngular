import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from '../../models/cursos';
import { ServiceCursosService } from 'src/app/services/service-cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-section-cursos',
  templateUrl: './section-cursos.component.html',
  styleUrls: ['./section-cursos.component.css']
})
export class SectionCursosComponent implements OnInit, OnDestroy{

      suscript!: Subscription;
      promesa= this.servicesDeCursos.evaluarCupo();
      dataSource!: MatTableDataSource <Curso>;
      columnas: string[] = ['titulo', 'modalidad', 'duracion', 'cupo', 'profesor', 'clasesSemanales','fechaInicio','acciones'];


      constructor(
        private servicesDeCursos:ServiceCursosService
      ){}


      ngOnInit(): void {

        //this.cursos = this.servicesDeCursos.obtenerCursos();
        this.dataSource = new MatTableDataSource<Curso>();
        this.servicesDeCursos.obtenerCursosObservable().subscribe((cursos:Curso[])=>{ this.dataSource.data=cursos;});
        this.promesa.then((curso)=>{
          console.log('Tiene cupo abierto')
        }).catch(()=>{
          console.log('Cupo cerrado / Quitar curso si su cupo no esta disponible')
        });
      }
      ngOnDestroy(){
        this.suscript.unsubscribe();
      }
      }

