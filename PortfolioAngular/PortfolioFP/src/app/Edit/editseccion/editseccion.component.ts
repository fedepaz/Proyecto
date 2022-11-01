import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conceptos } from 'src/app/Modelos/Conceptos';
import { Secciones } from 'src/app/Modelos/Secciones';
import { ConceptoService } from 'src/app/Services/conceptos.service';
import { SeccionesService } from 'src/app/Services/secciones.service';

@Component({
  selector: 'app-editseccion',
  templateUrl: './editseccion.component.html',
  styleUrls: ['./editseccion.component.css']
})
export class EditseccionComponent implements OnInit {
  itemsConceptos: Conceptos[] = [];
  itemsSecciones: Secciones[] = [];
  seccionEliminada: Secciones = new Secciones();
  seccionEditada: Secciones = new Secciones();


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

  editar(seccion: Secciones) {
    this.seccionEditada = seccion;
  }


  eliminar(seccion: Secciones) {
    this.seccionesServicio.eliminarPorId(seccion)
      .subscribe(data => {
        alert("Sección eliminada...");
        this.router.navigate(['edit']);
      })
  }

  enviar(seccion: Secciones) {
    this.seccionesServicio.editarPorId(seccion)
      .subscribe(data => {
        seccion = data;
        alert("Sección Editada");
        this.router.navigate(['edit']);
      })
  }
}