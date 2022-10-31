import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regresar',
  templateUrl: './regresar.component.html',
  styleUrls: ['./regresar.component.css']
})
export class RegresarComponent implements OnInit {

  constructor (private router:Router) { }

  ngOnInit(): void {
  }


  regreso(){
    this.router.navigate([''])

  }

}
