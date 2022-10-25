import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompComponent } from './ingreso/comp.component';
import { PrimeraComponent } from './Principal/primera/primera.component';
import { HeaderComponent } from './header/header.component';
import { ProyectosComponent } from './Principal/proyectos/proyectos.component';
import { FooterComponent } from './Principal/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConceptoService } from './Services/conceptos.service';
import { SeccionesService } from './Services/secciones.service';
import { SelectseccionComponent } from './Edit/selectseccion/selectseccion.component';
import { SelectitemComponent } from './Edit/selectitem/selectitem.component';
import { EditseccionComponent } from './Edit/editseccion/editseccion.component';
import { EdititemComponent } from './Edit/edititem/edititem.component';
import { CreateseccionComponent } from './Edit/createseccion/createseccion.component';
import { CreateitemComponent } from './Edit/createitem/createitem.component';

@NgModule({
  declarations: [
    AppComponent,
    CompComponent,
    HeaderComponent,
    FooterComponent,
    ProyectosComponent,
    PrimeraComponent,
    SelectseccionComponent,
    SelectitemComponent,
    EditseccionComponent,
    EdititemComponent,
    CreateseccionComponent,
    CreateitemComponent
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
