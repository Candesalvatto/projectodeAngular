import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
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



@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    SectionSliderComponent,
    SectionAlumnosComponent,
    FormSociosComponent,
    SectionCursosComponent,
    FormatoFechaHoraPipe,
    FormatoBooleanoPipe,
    DirectivaEstilosDirective,
    SectionNoticiasComponent,
    FooterComponent,

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
