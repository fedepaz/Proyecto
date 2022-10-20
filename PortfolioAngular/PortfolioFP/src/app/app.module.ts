import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './ingreso/comp.component';
import { PrimeraComponent } from './Principal/primera/primera.component';
import { HeaderComponent } from './header/header.component';

import { ExperienciaComponent } from './Principal/experiencia/experiencia.component';
import { CursosComponent } from './Principal/cursos/cursos.component';
import { ProyectosComponent } from './Principal/proyectos/proyectos.component';
import { FooterComponent } from './Principal/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConceptoService } from './Services/conceptos.service';
import { SeccionesService } from './Services/secciones.service';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    HeaderComponent,
    FooterComponent,
    ExperienciaComponent,
    CursosComponent,
    ProyectosComponent,
    PrimeraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ConceptoService, SeccionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
