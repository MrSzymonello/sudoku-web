import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonToggle  } from '@angular/material/button-toggle';
import { SudokuBoardService } from './sudokuBoard.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  @ViewChild('toggleButton') toggleButton: MatButtonToggle;
  
  board: number[];
  rows: {
    columns: {
      index: number,
      value: number
    }[]
  }[] = [];
  
  loading: boolean = false;
  selectedIndex: number = -1;
  selectedValue: number = -1;

  constructor(private sudokuBoardService: SudokuBoardService) {}

  ngOnInit() {
    this.getBoard();
  }
  
  clear() {
    this.toggleButton.buttonToggleGroup.value = null; 
    this.selectedIndex = -1;
    this.selectedValue = -1;
  }

  getBoard() {
    this.loading = true;
    this.sudokuBoardService.getSudokuBoard(this.selectedIndex, this.selectedValue)
      .subscribe((res: Response) => {        
        this.board = res.json();
        
        this.rows = [];
        for(var row = 0; row < 9; row++) {
          this.rows.push({columns: []});
          for(var column = 0; column < 9; column++) {
            this.rows[row].columns.push({
              index: row * 9 + column,
              value: this.board[row * 9 + column]});
          }
        }

        this.loading = false;
      }, () => this.loading = false);
  }

  selectedIndexChange(change) {
    this.selectedIndex = change.value;
    if (this.board.length === 81) {
      this.selectedValue = this.board[this.selectedIndex];
    }
  }
}
