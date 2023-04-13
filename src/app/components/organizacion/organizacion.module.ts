import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizacionRountingModule } from './organizacion-rounting.module';
import { SociosModuleModule } from 'src/app/socios/socios.module.module';
import { CursosModule } from 'src/app/cursos/cursos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrganizacionRountingModule,
    SociosModuleModule,
    CursosModule
  ]
})
export class OrganizacionModule { }
