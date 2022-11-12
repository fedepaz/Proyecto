import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router, private cookies: CookieService) { }

  token: string;

  login(email: string, pass: string) {

    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(response => (
        firebase.auth().currentUser?.getIdToken()
          .then(data => {
            this.token = data;
            this.cookies.set("token", this.token);
            this.router.navigate(['edit']);
          })
      ))
  }

  getIdToken() {
    return this.cookies.get("token");
  };

  estaLogin() {
    return this.cookies.get("token");
  };

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.token = "";
        this.cookies.set("token", this.token);
        this.router.navigate(['index']);
      });
  }
}
