import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  private _showSpinner: Subject<any>;
  public showSpinner: Observable<any>;

  constructor() {
    this._showSpinner = new Subject();
    this.showSpinner = this._showSpinner.asObservable();
  }

  show() {
    this._showSpinner.next(true);
  }

  hide() {
    this._showSpinner.next(false);
  }
}

