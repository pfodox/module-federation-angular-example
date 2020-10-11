import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {
    path: '',
    component: SecondPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
