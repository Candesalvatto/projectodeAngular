import { NgModule, isDevMode} from '@angular/core';
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
import { AppRountingModule } from './app-rounting.module';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { CursosServicesService } from './cursos/services/cursos-services.service';
import { InfoBecasComponent } from './components/info-becas/info-becas.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ServicesSociosService } from './services/services-socios.service';
import { LoguinService } from './services/loguin.service';
import { ServiceAlumnoService } from './services/service-alumno.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';






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
    InicioComponent,
    InfoBecasComponent,



  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRountingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule,
    StoreModule.forRoot({},{}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),


  ],
  exports:[ HttpClientModule,
    RouterModule,
    navbarComponent,
    sidebarComponent,
    SectionSliderComponent,
    SectionAlumnosComponent,
    FormSociosComponent,
    SectionNoticiasComponent,
    FooterComponent,
    PagenotfoundComponent,
    InicioComponent,
    MaterialModule,

  ],

  providers: [CursosServicesService,
    ServicesSociosService,
    LoguinService,
    ServiceAlumnoService],

  bootstrap: [AppComponent],
})
export class AppModule { }
