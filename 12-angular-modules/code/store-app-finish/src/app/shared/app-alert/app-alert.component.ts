import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './app-alert.component.html',
  styleUrls: ['./app-alert.component.css']
})
export class AppAlertComponent implements OnChanges {
  @Input() type = '';
  @Input() message = '';

  alertType = '';
  iconType = '';

  constructor() {}

  ngOnChanges() {
    this.alertType = this.type === 'info' ? 'alert-info' : 'alert-danger';
    this.iconType =
      this.type === 'info' ? 'glyphicon-info-sign' : 'glyphicon-warning-sign';
  }
}
