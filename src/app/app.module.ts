import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { navbarComponent } from './components/navbar/navbar.component';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { cardsComponent } from './components/cards/cards.component';
import { SectionSliderComponent } from './components/section-slider/section-slider.component';
import { SectionAlumnosComponent } from './components/section-alumnos/section-alumnos.component';
import { FormSociosComponent } from './components/form-socios/form-socios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionCursosComponent } from './components/section-cursos/section-cursos.component';
import {MaterialModule} from './material.module';
import { FormatoFechaHoraPipe } from './pipes/formato-fecha-hora.pipe';
import { FormatoBooleanoPipe } from './pipes/formato-booleano.pipe';
import { DirectivaEstilosDirective } from './directives/directiva-estilos.directive';
import { SectionNoticiasComponent } from './components/section-noticias/section-noticias.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormNuevoCursoComponent } from './components/form-nuevo-curso/form-nuevo-curso.component';



@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    sidebarComponent,
    cardsComponent,
    SectionSliderComponent,
    SectionAlumnosComponent,
    FormSociosComponent,
    SectionCursosComponent,
    FormatoFechaHoraPipe,
    FormatoBooleanoPipe,
    DirectivaEstilosDirective,
    SectionNoticiasComponent,
    FooterComponent,
    FormNuevoCursoComponent,

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
