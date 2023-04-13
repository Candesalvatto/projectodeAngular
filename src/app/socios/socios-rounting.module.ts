import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesSociosService } from '../services/services-socios.service';
import { InicioSesionComponent } from '../inicio-sesion/components/inicio-sesion.component';


const routes: Routes = [
  { path: '', component: InicioSesionComponent}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ServicesSociosService],
})
export class SociosRountingModule { }
