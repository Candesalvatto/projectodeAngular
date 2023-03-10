import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { InicioSesionRoutingModule } from './inicio-sesion-routing.module';
import { InicioSesionComponent } from './components/inicio-sesion.component';
import { InicioSesionService } from './services/inicio-sesion.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations:[
    InicioSesionComponent
  ],

  imports: [
    CommonModule,
    InicioSesionRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule
    ],
    exports:[RouterModule],

  providers:[InicioSesionService],
})
export class InicioSesionModule { }
