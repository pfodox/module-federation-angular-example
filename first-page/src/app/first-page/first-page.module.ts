import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page.component';
import { FirstRoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FirstRoutingModule,
  ],
  declarations: [FirstPageComponent],
})
export class FirstPageModule {
}
