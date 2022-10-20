
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ingreso',
  templateUrl: './comp.component.html',
  styleUrls: ['./comp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CompComponent implements OnInit {

  pruebita:boolean=true;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  ingreso(){    
  this.route.navigate(["primera"]);
  this.pruebita=false;
   }

}
