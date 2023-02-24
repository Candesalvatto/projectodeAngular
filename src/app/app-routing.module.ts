import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cardsComponent } from './cursos/components/cards/cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormNuevoCursoComponent } from './cursos/components/form-nuevo-curso/form-nuevo-curso.component';
import { FormSociosComponent } from './components/form-socios/form-socios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SectionCursosComponent } from './cursos/components/section-cursos/section-cursos.component';
import { SectionNoticiasComponent } from './components/section-noticias/section-noticias.component';
import { EditarCursoComponent } from './cursos/components/editar-curso/editar-curso.component';


const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  { path: 'cards', component: cardsComponent },
  { path:'formacion', children: [
    { path: 'enseña-con-nosotros', component:  FormNuevoCursoComponent },
    { path: 'tabla-de-cursos', component: SectionCursosComponent},
    { path: 'editar', component: EditarCursoComponent },
  ] },
  { path: 'noticias', component: SectionNoticiasComponent },
  { path: 'formulario-socios', component: FormSociosComponent },
  { path: 'footer', component: FooterComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
