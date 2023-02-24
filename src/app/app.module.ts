import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { navbarComponent } from './components/navbar/navbar.component';
import { sidebarComponent } from './components/sidebar/sidebar.component';
import { SectionSliderComponent } from './components/section-slider/section-slider.component';
import { SectionAlumnosComponent } from './components/section-alumnos/section-alumnos.component';
import { FormSociosComponent } from './components/form-socios/form-socios.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { SectionNoticiasComponent } from './components/section-noticias/section-noticias.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursosModule } from './cursos/cursos.module';





@NgModule({
  declarations: [
    AppComponent,
    navbarComponent,
    sidebarComponent,
    SectionSliderComponent,
    SectionAlumnosComponent,
    FormSociosComponent,
    SectionNoticiasComponent,
    FooterComponent,
    PagenotfoundComponent,
    InicioComponent
  ],

  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CursosModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
