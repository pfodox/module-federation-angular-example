import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageModule } from './first-page/first-page.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstPageModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
