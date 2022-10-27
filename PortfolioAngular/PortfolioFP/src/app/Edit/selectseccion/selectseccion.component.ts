import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectseccion',
  templateUrl: './selectseccion.component.html',
  styleUrls: ['./selectseccion.component.css']
})
export class SelectseccionComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  

  edit(){
    this.router.navigate(['edit_seccion'])
  }

  nuevo(){
    this.router.navigate(['create_seccion'])
  }
}
