import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'first-page',
    loadChildren: () => import('first-page/module').then(m => m.FirstPageModule)
  },
  {
    path: 'second-page',
    loadChildren: () => import('second-page/module').then(m => m.SecondPageModule)
  },
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
