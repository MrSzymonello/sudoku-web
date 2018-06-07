import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './app.error-handler';
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
    MatButtonModule,
    ToastyModule.forRoot()
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    SudokuBoardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
