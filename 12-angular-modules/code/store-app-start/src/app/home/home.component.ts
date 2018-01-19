import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private loggingService: LoggingService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onGoToProducts() {
    this.loggingService.logMessage('Home - Go To Products button clicked.');
    this.router.navigate(['/products']);
  }

  onGoToCustomers() {
    this.loggingService.logMessage('Home - Go To Customers button clicked.');
    this.router.navigate(['/customers']);
  }
}
