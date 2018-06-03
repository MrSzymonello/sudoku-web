import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { SudokuBoardService } from './sudokuBoard.service';
import { LoaderComponent } from './shared/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MatButtonToggleModule,
    MatButtonModule
  ],
  providers: [SudokuBoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
