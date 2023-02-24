import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cardsComponent } from './components/cards/cards.component';
import { SectionCursosComponent } from './components/section-cursos/section-cursos.component';
import { FormNuevoCursoComponent } from './components/form-nuevo-curso/form-nuevo-curso.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosServicesService } from './services/cursos-services.service';
import { DirectivaEstilosDirective } from '../directives/directiva-estilos.directive';
import { FormatoBooleanoPipe } from '../pipes/formato-booleano.pipe';
import { FormatoFechaHoraPipe } from '../pipes/formato-fecha-hora.pipe';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';





@NgModule({
  declarations:[
  cardsComponent,
  SectionCursosComponent,
  FormNuevoCursoComponent,
  DirectivaEstilosDirective,
  FormatoFechaHoraPipe,
  FormatoBooleanoPipe,
  EditarCursoComponent],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    CursosRoutingModule],

  providers:[CursosServicesService],
})
export class CursosModule { }
