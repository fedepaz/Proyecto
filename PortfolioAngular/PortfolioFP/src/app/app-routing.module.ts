import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateitemComponent } from './Edit/createitem/createitem.component';
import { CreateseccionComponent } from './Edit/createseccion/createseccion.component';
import { EdititemComponent } from './Edit/edititem/edititem.component';
import { EditseccionComponent } from './Edit/editseccion/editseccion.component';
import { InicioComponent } from './edit/inicio/inicio.component';
import { SelectitemComponent } from './Edit/selectitem/selectitem.component';
import { SelectseccionComponent } from './Edit/selectseccion/selectseccion.component';
import { CompComponent } from './ingreso/comp.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PrimeraComponent } from './Principal/primera/primera.component';
import { ProyectosComponent } from './Principal/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: CompComponent },
  { path: 'index', component: PrimeraComponent },
  { path: 'portfolio', component: ProyectosComponent },
  { path: 'edit', component: InicioComponent },
  { path: 'select_seccion', component: SelectseccionComponent },
  { path: 'select_item', component: SelectitemComponent },
  { path: 'edit_seccion', component: EditseccionComponent },
  { path: 'edit_item', component: EdititemComponent },
  { path: 'create_seccion', component: CreateseccionComponent },
  { path: 'create_item', component: CreateitemComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
