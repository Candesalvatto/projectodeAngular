import { NgModule, isDevMode} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
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
import { InfoBecasComponent } from './components/info-inicio/info-becas.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { OrganizacionComponent } from './components/organizacion/components/organizacion.component';
import { OrganizacionModule } from './components/organizacion/organizacion.module';




@NgModule({
  declarations: [
    AppComponent,
    SectionSliderComponent,
    SectionAlumnosComponent,
    FormSociosComponent,
    SectionNoticiasComponent,
    FooterComponent,
    PagenotfoundComponent,
    InicioComponent,
    InfoBecasComponent,
    OrganizacionComponent
  ],

  imports: [
    BrowserModule,
    RouterModule,
    AppRountingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    OrganizacionModule,
    CommonModule,
    StoreModule.forRoot({},{}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([])
  ],

  exports:[ HttpClientModule,
    RouterModule,
    SectionSliderComponent,
    SectionAlumnosComponent,
    OrganizacionComponent,
    FormSociosComponent,
    SectionNoticiasComponent,
    FooterComponent,
    PagenotfoundComponent,
    InicioComponent,
    MaterialModule,
  ],

  providers: [],

  bootstrap: [AppComponent],
})
export class AppModule { }
