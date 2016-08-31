import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AnimalComponent } from './animals/animal.component';
import { ProjectComponent } from './projects/project.component';
import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    AnimalComponent,
    ProjectComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
