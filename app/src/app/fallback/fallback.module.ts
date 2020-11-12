import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FallbackComponent } from './fallback.component';
import { FallbackRoutingModule } from './routing.module';

@NgModule({
  imports: [
    CommonModule,
    FallbackRoutingModule,
  ],
  declarations: [FallbackComponent],
})
export class FallbackModule {
}
