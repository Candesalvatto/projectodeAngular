import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cardsComponent } from './components/cards/cards.component';
import { SectionCursosComponent } from './components/section-cursos/section-cursos.component';
import { FormNuevoCursoComponent } from './components/form-nuevo-curso/form-nuevo-curso.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosRountingModule } from './cursos-rounting.module';
import { FormatoBooleanoPipe } from '../pipes/formato-booleano.pipe';
import { FormatoFechaHoraPipe } from '../pipes/formato-fecha-hora.pipe';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { CursosServicesService } from './services/cursos-services.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRountingModule } from '../app-rounting.module';








@NgModule({
  declarations:[
  cardsComponent,
  SectionCursosComponent,
  FormNuevoCursoComponent,
  FormatoFechaHoraPipe,
  FormatoBooleanoPipe,
  EditarCursoComponent,],

  imports: [
    CommonModule,
    CursosRountingModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule,
    ],

exports:[HttpClientModule],

  providers:[CursosServicesService],
})
export class CursosModule { }
