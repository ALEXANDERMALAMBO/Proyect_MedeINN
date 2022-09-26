import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'sic-actions-dialog',
  templateUrl: './actions-dialog.component.html',
  styleUrls: ['./actions-dialog.component.scss']
})
export class ActionsDialogComponent implements OnInit {

  message: string;
  content: string;
  icon: string;
  class: string;
  title:string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    message: string;
    content: string;
    severity: 'success' | 'error' | 'warning' | 'info';
  }) {
    this.message = '';
    this.content = '';
    this.icon = '';
    this.class = '';
    this.title = "";
  }

  ngOnInit(): void {
    this.setIcon()
    this.setTitle()
    this.message = this.data.message;
    this.content = this.data.content;
    this.class = 'dialog_' + this.data.severity;
  }

  setIcon() {
    if (this.data.severity === 'success') {
      this.icon = 'govco-icon-check-cn';
    } else if (this.data.severity === 'error') {
      this.icon = 'govco-icon-x-cn';
    } else if (this.data.severity === 'warning') {
      this.icon = 'govco-icon-exclamation-cn';
    } else {
      this.icon = 'govco-icon-check-cn';
    }
  }

  setTitle() {
    if (this.data.severity === 'success') {
      this.title = 'Exitoso';
    } else if (this.data.severity === 'error') {
      this.title = 'Lo sentimos';
    } else if (this.data.severity === 'warning') {
      this.title = 'Advertencia';
    } else {
      this.title = 'Información';
    }
  }
}
