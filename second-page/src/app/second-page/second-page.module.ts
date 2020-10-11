import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page.component';
import { FirstRoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule,
  ],
  declarations: [SecondPageComponent],
})
export class SecondPageModule {
}
