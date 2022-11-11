import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    

    const email = form.value.email;
    const pass = form.value.pass;
    console.log(email, pass);
    this.loginService.login(email, pass)
    console.log(this.loginService.getIdToken());

  }
  ingresar() {
    this.router.navigate(['edit'])
  }

}
