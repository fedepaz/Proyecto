import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Secciones } from '../Modelos/Secciones';


@Injectable({
  providedIn: 'root'
})

export class SeccionesService {



  private direccion = 'http://localhost:8080/portfolio/secciones';

  constructor(private http: HttpClient) { }

  obtener() {
    return this.http.get<Secciones[]>(this.direccion);
  };


  obtenerPorId(id: number) {
    return this.http.get<Secciones>(this.direccion + "/" + id);
  };


  guardar(seccion: Secciones) {
    return this.http.post<Secciones>(this.direccion, seccion);
  };


  editarPorId(seccion: Secciones) {
    return this.http.put<Secciones>(this.direccion + "/" + seccion.id, seccion);
  };


  eliminarPorId(seccion: Secciones) {
    return this.http.delete<Secciones>(this.direccion + "/" + seccion.id);
  };
}