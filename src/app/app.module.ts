import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';import { MyvisibilityDirective } from './myvisibility.directive';
import { MycolorDirective } from './mycolor.directive';
import { MycomponentComponent } from './mycomponent.component';
import { UpperDirective } from './upper.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyvisibilityDirective,
    MycolorDirective,
    MycomponentComponent,
    UpperDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
