import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesSociosService } from './service/services-socios.service';
import { SociosComponent } from './components/tabla/socios.component';
import { SesionGuard } from '../guards/sesion.guard';
import { AdminGuard } from '../guards/admin.guard';
import { FormSociosComponent } from './components/form-socios/form-socios.component';


const routes: Routes = [

{
  path:'',
  canActivateChild: [SesionGuard], component:SociosComponent, canActivate: [AdminGuard],
  children: [
    {
      path: 'formulario-socio-nuevo',
      component: FormSociosComponent,
      canActivate: [AdminGuard]
    }
  ]
}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ServicesSociosService],
})
export class SociosRountingModule { }
