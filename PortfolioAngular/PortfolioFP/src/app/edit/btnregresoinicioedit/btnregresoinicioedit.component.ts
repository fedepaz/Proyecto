import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btnregresoinicioedit',
  templateUrl: './btnregresoinicioedit.component.html',
  styleUrls: ['./btnregresoinicioedit.component.css']
})
export class BtnregresoinicioeditComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }


  salir(){
    this.router.navigate(['edit'])
  }



}
