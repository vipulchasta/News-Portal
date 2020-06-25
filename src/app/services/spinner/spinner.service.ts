import { Injectable } from '@angular/core';

import { NgxSpinnerService } from "ngx-spinner";


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  private showCount : number = 0;

  constructor(private spinner: NgxSpinnerService) { }

  show() {
    if(0 === this.showCount) {
      this.spinner.show();
    }
    this.showCount++;
  }

  hide() {
    this.showCount--;
    if(0 === this.showCount) {
      this.spinner.hide();
    }
  }

  clear() {
    this.showCount = 0;
    if(0 === this.showCount) {
      this.spinner.hide();
    }
  }

}
