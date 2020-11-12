import { Component } from '@angular/core';
import { EventBusService } from './event-bus.service';

@Component({
  selector: 'my-app',
  template: `
  <main [style.backgroundColor]="backgroundColor">
    <h1>Webpack5 Module Federation Angular App</h1>
  
    <nav>
      <ul>
          <li><a routerLink="/first-page" routerLinkActive="active">First Page</a></li>
          <li><a routerLink="/second-page" routerLinkActive="active">Second Page</a></li>
      </ul>
    </nav>
  
    <div class="page-wrapper">
      <router-outlet></router-outlet>
    </div>
  </main>
`,
  styles: [`
  main {
    text-align: center;
    display: block;
    border: 6px dashed black;
  }

  .page-wrapper{
    border: 4px solid #e25a5a;
  }
  `]
})
export class AppComponent {

  backgroundColor = 'lightgray';

  constructor(private eventBusService: EventBusService) { }

  ngOnInit() {
    this.eventBusService.subscribe((key: string, value: any) => {
      if (key === 'change_app_background') {
        this.backgroundColor = value;
      }
    });
  }
}
