import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnimalsComponent } from './animals.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, AnimalsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
