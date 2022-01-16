import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreDataModule } from '@jan-fullstack/core-data';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreDataModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
