import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { FormSociosComponent } from './components/form-socios/form-socios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SectionNoticiasComponent } from './components/section-noticias/section-noticias.component';
import { SesionGuard } from './guards/sesion.guard';


const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  { path:'formacion',
  loadChildren: ()=> import('./cursos/cursos.module').then((modulo)=>modulo.CursosModule)},
  { path:'inicio-sesion', loadChildren:()=> import('./inicio-sesion/inicio-sesion.module').then((modulo)=> modulo.InicioSesionModule)},
  { path: 'noticias', component: SectionNoticiasComponent },
  { path: 'formulario-socios', component: FormSociosComponent },
  { path: 'footer', component: FooterComponent },
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule { }