import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondPageModule } from './second-page/second-page.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecondPageModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
