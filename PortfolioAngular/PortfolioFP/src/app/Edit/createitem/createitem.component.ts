import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conceptos } from 'src/app/Modelos/Conceptos';
import { Secciones } from 'src/app/Modelos/Secciones';
import { ConceptoService } from 'src/app/Services/conceptos.service';
import { SeccionesService } from 'src/app/Services/secciones.service';

@Component({
  selector: 'app-createitem',
  templateUrl: './createitem.component.html',
  styleUrls: ['./createitem.component.css']
})
export class CreateitemComponent implements OnInit {
  itemsConceptos: Conceptos[] = [];
  itemsSecciones: Secciones[] = [];
  concep: Conceptos = new Conceptos();
  seccion: Secciones = new Secciones();


  constructor(
    private conceptosServicio: ConceptoService,
    private seccionesServicio: SeccionesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.seccionesServicio.obtener()
      .subscribe(data => {
        this.itemsSecciones = data;
      });

    this.conceptosServicio.obtener()
      .subscribe(data1 => {
        this.itemsConceptos = data1;
      });
  }

  agregar() {
    this.concep.secciones = this.seccion;
    this.conceptosServicio.guardar(this.concep)
      .subscribe(data => {
        alert("A ver si creo???");
        console.log(this.concep);
      });
  }

}