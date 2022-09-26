import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../core/services/spinner/spinner.service';

@Component({
  selector: 'general-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  public show: boolean;

  constructor(private spinnerService: SpinnerService) {
    this.show = false;
  }

  ngOnInit(): void {
    this.spinnerService.showSpinner.subscribe((show) => {
      this.show = show;
    });
  }
}
