import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Customer } from '../../models/customer';
import { CustomersService } from '../../services/customers.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  id: number;
  customer: Customer;
  addNew = false;

  constructor(
    private customersService: CustomersService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => (this.id = +params['id']));

    if (!isNaN(this.id)) {
      this.customer = this.customersService.getCustomer(this.id);
    }

    if (!this.customer) {
      this.customer = new Customer();
      this.addNew = true;
    }
  }

  onSave() {
    this.loggingService.logMessage('Customer Form - Save button clicked.');
    if (this.addNew) {
      this.customersService.addCustomer(this.customer);
      this.router.navigate(['/customers']);
    } else {
      this.customersService.updateCustomer(this.id, this.customer);
      this.router.navigate(['/customers', this.id]);
    }
  }
}
