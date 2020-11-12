import { Component } from '@angular/core';
import { EventBusService } from './event-bus.service';

@Component({
  template: '<div class="second-page"> SECOND PAGE </div>',
  styles: [`
      .second-page {
        width: 100%;
        height: 50vh;
        font-size: 24px;
        color: #496a18;
        background-color: #d7ddd0;
      }`
  ]
})
export class SecondPageComponent {
  constructor(private eventBusService: EventBusService) {
  }

  ngOnInit() {
    this.eventBusService.publish('change_app_background', '#859a6c');
  }
}
