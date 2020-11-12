import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FallbackComponent } from './fallback.component';

const routes: Routes = [
  {
    path: '',
    component: FallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FallbackRoutingModule { }
