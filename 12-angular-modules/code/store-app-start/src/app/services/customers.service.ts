import { Injectable } from '@angular/core';

import { Customer } from '../models/customer';
import { LoggingService } from './logging.service';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'John',
      phone: '9988776655',
      email: 'john@abc.xyz',
      city: 'Bengaluru'
    },
    {
      id: 2,
      name: 'Asif',
      phone: '1122334455',
      email: 'asif@abc.xyz',
      city: 'Chennai'
    },
    {
      id: 3,
      name: 'Hari',
      phone: '3355776644',
      email: 'hari@abc.xyz',
      city: 'Mumbai'
    },
    {
      id: 4,
      name: 'Amar',
      phone: '2244668800',
      email: 'amar@abc.xyz',
      city: 'New Delhi'
    }
  ];

  constructor(private loggingService: LoggingService) {}

  getCustomers(): Customer[] {
    return this.customers;
  }

  getCustomer(id: number): Customer {
    this.loggingService.logMessage('Get Customer, id: ' + id);
    const customer = this.customers.find(customer => customer.id === id);

    return customer;
  }

  addCustomer(customer: Customer) {
    const newCustomer = new Customer();
    newCustomer.id = this.generateId();
    newCustomer.name = customer.name;
    newCustomer.email = customer.email;
    newCustomer.phone = customer.phone;
    newCustomer.city = customer.city;

    this.customers.push(newCustomer);
  }

  private generateId(): number {
    let id = 1;
    let lastItemIndex = this.customers.length - 1;
    if (lastItemIndex > -1) {
      id = this.customers[lastItemIndex].id + 1;
    }
    return id;
  }

  updateCustomer(id: number, customerInfo: Customer) {
    const customer = this.getCustomer(id);

    if (customer) {
      customer.name = customerInfo.name;
      customer.email = customerInfo.email;
      customer.phone = customerInfo.phone;
      customer.city = customerInfo.city;
    }
  }

  deletecustomer(id: number) {
    const index = this.customers.findIndex(customer => customer.id === id);

    if (index >= 0) {
      this.customers.splice(index, 1);
    }
  }
}
