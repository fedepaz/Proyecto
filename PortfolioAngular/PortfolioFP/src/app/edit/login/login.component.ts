import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  login(form:NgForm){   

    const email= form.value.email;
    const pass = form.value.pass;
    console.log(email, pass);

  }
  ingresar(){
    this.router.navigate(['edit'])
  }

}
