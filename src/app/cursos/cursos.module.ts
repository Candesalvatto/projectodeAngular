import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cardsComponent } from './components/cards/cards.component';
import { SectionCursosComponent } from './components/section-cursos/section-cursos.component';
import { FormNuevoCursoComponent } from './components/form-nuevo-curso/form-nuevo-curso.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosRountingModule } from './cursos-rounting.module';
import { CursosServicesService } from './services/cursos-services.service';
import { DirectivaEstilosDirective } from '../directives/directiva-estilos.directive';
import { FormatoBooleanoPipe } from '../pipes/formato-booleano.pipe';
import { FormatoFechaHoraPipe } from '../pipes/formato-fecha-hora.pipe';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { DataCursoComponent } from './components/data-curso/data-curso.component';





@NgModule({
  declarations:[
  cardsComponent,
  SectionCursosComponent,
  FormNuevoCursoComponent,
  DirectivaEstilosDirective,
  FormatoFechaHoraPipe,
  FormatoBooleanoPipe,
  EditarCursoComponent,
  DataCursoComponent],

  imports: [
    CommonModule,
    CursosRountingModule,
    ReactiveFormsModule,
    MaterialModule,
    ],

  providers:[CursosServicesService],
})
export class CursosModule { }
