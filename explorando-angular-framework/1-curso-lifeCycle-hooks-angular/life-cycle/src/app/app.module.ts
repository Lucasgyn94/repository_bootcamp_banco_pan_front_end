import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ExemploDoCheckComponent } from './exemplo-do-check/exemplo-do-check.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ExemploDoCheckComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
