import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionComponent } from './components/inicio-sesion.component';

@NgModule({
  declarations:[
    InicioSesionComponent
  ],

  imports: [
    CommonModule,
    InicioSesionRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    ],

  providers:[],
})
export class InicioSesionModule { }
