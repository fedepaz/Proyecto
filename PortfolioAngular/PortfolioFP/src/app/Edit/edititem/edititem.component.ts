import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conceptos } from 'src/app/Modelos/Conceptos';
import { Secciones } from 'src/app/Modelos/Secciones';
import { ConceptoService } from 'src/app/Services/conceptos.service';
import { SeccionesService } from 'src/app/Services/secciones.service';

@Component({
  selector: 'app-edititem',
  templateUrl: './edititem.component.html',
  styleUrls: ['./edititem.component.css']
})
export class EdititemComponent implements OnInit {
  itemsConceptos: Conceptos[] = [];
  itemsSecciones: Secciones[] = [];
  conceptoEditado: Conceptos = new Conceptos();
  conceptoEliminado: Conceptos = new Conceptos();


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

  editar(concepto: Conceptos) {
    this.conceptoEditado = concepto;
  }

  eliminar(concepto: Conceptos) {
    console.log(concepto);
    this.conceptosServicio.eliminarPorId(concepto)
      .subscribe(data => {
        alert("Se eliminó " + concepto.titulo);
      });
  }

  enviar(concepto: Conceptos) {
    console.log(concepto);
    this.conceptosServicio.editarPorId(concepto)
      .subscribe(data => {
        concepto = data;
        alert("Sección Editada")
      })
  }
}