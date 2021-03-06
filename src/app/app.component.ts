/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
  <md-sidenav-layout fullscreen>
  <md-sidenav #start (open)="mybutton.focus()" mode="push">
    Start Sidenav.
    <br><br>
    <a md-button [routerLink]=" ['./builds'] ">
      Builds
    </a>

    <br>
    <a md-button [routerLink]=" ['./'] ">
      Index
    </a>
    <br>
    <a md-button [routerLink]=" ['./home'] ">
      Home
    </a>
    <br>
    <a md-button [routerLink]=" ['./detail'] ">
      Detail
    </a>
    <br>
    <a md-button [routerLink]=" ['./about'] ">
      About
    </a>
    <br>
    <button md-button #mybutton (click)="start.close()">Close</button>
  </md-sidenav>
  <md-sidenav #end align="end">
    End Sidenav.
    <button md-button (click)="end.close()">Close</button>
  </md-sidenav>
  <md-content>
    <md-toolbar color="primary">
        <md-button (click)="start.open()">
          <md-icon>
            menu
          </md-icon>
        </md-button>
        <span>{{ name }}</span>
        <span class="fill"></span>

    </md-toolbar>

    <md-progress-bar mode="indeterminate" color="primary" *ngIf="loading"></md-progress-bar>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <p>Footer app.component.ts</p>
    </footer>
  </md-content>
</md-sidenav-layout>

  `
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';


  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}
