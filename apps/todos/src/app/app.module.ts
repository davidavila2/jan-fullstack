import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreDataModule } from '@jan-fullstack/core-data';
import { CoreStateModule } from '@jan-fullstack/core-state';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreDataModule,
    CoreStateModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
