import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondPageComponent } from './second-page.component';
import { SecondRoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    SecondRoutingModule,
  ],
  declarations: [SecondPageComponent],
})
export class SecondPageModule {
}
