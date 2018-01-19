import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  id: number;
  customer: Customer;

  constructor(
    private customersService: CustomersService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.getCustomer();
      }
    );
  }

  private getCustomer() {
    this.customer = this.customersService.getCustomer(this.id);

    if(!this.customer) {
      this.customer = new Customer();
    }
  }

  onEdit() {
    this.loggingService.logMessage('Customer Detail - Edit button clicked.');
    this.router.navigate(['/customers', this.id, 'edit']);
  }

  onDelete() {
    this.loggingService.logMessage('Customer Detail - Delete button clicked.');
    this.customersService.deletecustomer(this.id);
    this.router.navigate(['/customers']);
  }
}
