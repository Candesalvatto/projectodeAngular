import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrganizacionComponent } from './components/organizacion.component';

const routes: Routes = [
  { path: 'organizacion', component: OrganizacionComponent },
]



@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class OrganizacionRountingModule { }
