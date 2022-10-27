import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectitem',
  templateUrl: './selectitem.component.html',
  styleUrls: ['./selectitem.component.css']
})
export class SelectitemComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  edit(){
    this.router.navigate(['edit_item'])
  }

  nuevo(){
    this.router.navigate(['create_item'])
  }

}
