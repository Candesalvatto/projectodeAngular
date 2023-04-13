import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacionRountingModule } from './organizacion-rounting.module';
import { SociosModuleModule } from 'src/app/socios/socios.module.module';
import { CursosModule } from 'src/app/cursos/cursos.module';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrganizacionRountingModule,
    SociosModuleModule,
    CursosModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[RouterModule],
})
export class OrganizacionModule { }
