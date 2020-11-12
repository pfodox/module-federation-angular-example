import { Component } from '@angular/core';
import { EventBusService } from './event-bus.service';

@Component({
  template: `<div class="first-page"> FIRST PAGE </div>`,
  styles: [`
    .first-page {
      width: 100%;
      height: 50vh;
      font-size: 24px; 
      color: #006880;
      background-color: #d0dcdd;
    }`
  ]
})
export class FirstPageComponent {

  constructor(private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.eventBusService.publish('change_app_background', '#8cbbbf');
  }
}
