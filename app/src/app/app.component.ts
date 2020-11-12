import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <main>
    <h1>Webpack5 Module Federation Angular App</h1>
  
    <nav>
      <ul>
          <li><a routerLink="/first-page" routerLinkActive="active">First Page</a></li>
          <li><a routerLink="/second-page" routerLinkActive="active">Second Page</a></li>
      </ul>
    </nav>
  
    <router-outlet></router-outlet>
  </main>
`,
  styles: [`
  main {
    text-align: center;
    display: block;
    background-color: lightgray;
  }
  `]
})
export class AppComponent { }
