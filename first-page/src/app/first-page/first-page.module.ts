import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { FirstRoutingModule } from './routing.module';
import { EventBusService } from './event-bus.service';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule,
  ],
  providers: [
    EventBusService
  ],
  declarations: [FirstPageComponent],
})
export class FirstPageModule {
}
