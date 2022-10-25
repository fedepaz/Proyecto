import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompComponent } from './ingreso/comp.component';
import { CursosComponent } from './Principal/cursos/cursos.component';

import { PrimeraComponent } from './Principal/primera/primera.component';
import { ProyectosComponent } from './Principal/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: CompComponent },
  { path: 'primera', component: PrimeraComponent },
  { path: 'cursos', component: CursosComponent },
  
  { path: 'proyectos', component: ProyectosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
