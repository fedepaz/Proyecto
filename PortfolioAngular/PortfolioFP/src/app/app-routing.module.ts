import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';
import { CreateitemComponent } from './Edit/createitem/createitem.component';
import { CreateseccionComponent } from './Edit/createseccion/createseccion.component';
import { EdititemComponent } from './Edit/edititem/edititem.component';
import { EditseccionComponent } from './Edit/editseccion/editseccion.component';
import { InicioComponent } from './edit/inicio/inicio.component';
import { LoginComponent } from './edit/login/login.component';
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
  { path: 'login', component: LoginComponent },
  { path: 'edit', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'select_seccion', component: SelectseccionComponent, canActivate: [AuthGuard] },
  { path: 'select_item', component: SelectitemComponent, canActivate: [AuthGuard] },
  { path: 'edit_seccion', component: EditseccionComponent, canActivate: [AuthGuard] },
  { path: 'edit_item', component: EdititemComponent, canActivate: [AuthGuard] },
  { path: 'create_seccion', component: CreateseccionComponent, canActivate: [AuthGuard] },
  { path: 'create_item', component: CreateitemComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
