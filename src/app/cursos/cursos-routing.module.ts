import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { cardsComponent } from './components/cards/cards.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { FormNuevoCursoComponent } from './components/form-nuevo-curso/form-nuevo-curso.component';
import { SectionCursosComponent } from './components/section-cursos/section-cursos.component';



const routes: Routes = [
  // { path:'formacion', children: [
  //   { path: 'enseña-con-nosotros', component:  FormNuevoCursoComponent },
  //   { path: 'tabla-de-cursos', component: SectionCursosComponent},
  //   { path: 'editar', component: EditarCursoComponent },
  //   { path: 'cards', component: cardsComponent },
  // ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
