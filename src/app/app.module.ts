import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular/main';
import { HeaderGroupComponent } from './header-group.component';
import { GridComponent } from './grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    HeaderGroupComponent
  ],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([
      HeaderGroupComponent
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
