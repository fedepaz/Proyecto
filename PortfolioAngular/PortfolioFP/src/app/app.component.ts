import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyBc9u1hNsbnH6RUAeOLjfxdTolZKJ6lSNk",
      authDomain: "portfolio-1967f.firebaseapp.com",
    })
  }



  title = 'PortfolioFP';
}
