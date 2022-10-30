import { Component, OnInit } from '@angular/core';
import { Secciones } from 'src/app/Modelos/Secciones';
import { SeccionesService } from 'src/app/Services/secciones.service';

@Component({
  selector: 'app-createseccion',
  templateUrl: './createseccion.component.html',
  styleUrls: ['./createseccion.component.css']
})
export class CreateseccionComponent implements OnInit {

  seccion:Secciones=new Secciones();

  constructor( private servicioSeccion:SeccionesService) { }

  ngOnInit(): void {
  }

  crearSeccion(){
    this.seccion.conceptos= null;
    this.servicioSeccion.guardar(this.seccion)
    .subscribe(data=>{
      alert("Nueva Sección creada");
      console.log(this.seccion);
    });

    }
  }
