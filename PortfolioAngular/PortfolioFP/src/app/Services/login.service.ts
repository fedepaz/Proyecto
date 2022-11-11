import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  token: string;

  login(email: string, pass: string) {

    firebase.auth().signInWithEmailAndPassword(email, pass)
      .then(response => (
        firebase.auth().currentUser?.getIdToken()
          .then(data => {
            this.token = data;
            this.router.navigate(['edit'])
          })
      ))
  }

  getIdToken() {
    return this.token;
  }

  estaLogin() {
    return this.token;
  }

  logout() {
    firebase.auth().signOut()
      .then(() => {
        this.token = "";
        this.router.navigate(['index']);
      })
  }
}
