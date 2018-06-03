import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class SudokuBoardService {

  constructor(private http: Http) { }

  getSudokuBoard(index: Number, value: Number) {
    if (index >= 0 && index <= 80
             && value >= 1 && value <= 9) {
        return this.http.get(environment.apiUrl + `/sudoku/board?index=${index}&value=${value}`);
    } else {
        return this.http.get(environment.apiUrl + '/sudoku/board');
    }
  }
}
