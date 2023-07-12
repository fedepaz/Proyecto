import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Conceptos } from '../Modelos/Conceptos';
import { LoginService } from './login.service';


@Injectable({
  providedIn: 'root'
})

export class ConceptoService {

  private direccion = 'http://localhost:8080/portfolio/conceptos';

  constructor(private http: HttpClient, private loginService: LoginService) { }

  obtener() {
    return this.http.get<Conceptos[]>(this.direccion);
  };


  obtenerPorId(id: number) {
    return this.http.get<Conceptos>(this.direccion + "/" + id);
  };


  guardar(concepto: Conceptos) {
    return this.http.post<Conceptos>(this.direccion, concepto);
  };


  editarPorId(concepto: Conceptos) {
    return this.http.put<Conceptos>(this.direccion + "/" + concepto.id, concepto);
  };


  eliminarPorId(concepto: Conceptos) {
    return this.http.delete<Conceptos>(this.direccion + "/" + concepto.id);
  };
}

