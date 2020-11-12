import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page.component';
import { SecondRoutingModule } from './routing.module';
import { EventBusService } from './event-bus.service';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule,
  ],
  providers: [EventBusService],
  declarations: [SecondPageComponent],
})
export class SecondPageModule {
}
