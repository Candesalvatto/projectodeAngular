import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesSociosService } from './service/services-socios.service';
import { SociosComponent } from './components/tabla/socios.component';


const routes: Routes = [
  { path: '', component: SociosComponent}
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [ServicesSociosService],
})
export class SociosRountingModule { }
