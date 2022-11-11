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
import { NotfoundComponent } from './notfound/notfound.component';
import { InicioComponent } from './edit/inicio/inicio.component';
import { RegresarComponent } from './notfound/regresar/regresar.component';
import { SalirComponent } from './edit/salir/salir.component';
import { BtnregresoinicioeditComponent } from './edit/btnregresoinicioedit/btnregresoinicioedit.component';
import { LoginComponent } from './edit/login/login.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { LoginService } from './Services/login.service';

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
    CreateitemComponent,
    NotfoundComponent,
    InicioComponent,
    RegresarComponent,
    SalirComponent,
    BtnregresoinicioeditComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule
  ],
  providers: [ConceptoService, SeccionesService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
