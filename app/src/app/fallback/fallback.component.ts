import { Component } from '@angular/core';

@Component({
  template: `<div class="fallback-page"> Fallback </div>`,
  styles: [`
    .fallback-page {
      width: 100%;
      height: 50vh;
      font-size: 24px; 
      color: #ffffff;
      background-color: #6b2222;
    }`
  ]
})
export class FallbackComponent {
}
