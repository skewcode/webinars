import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Customer components
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

import { SharedModule } from '../shared/shared.module';
import { CustomersRoutingModule } from './customers-routing.module';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerFormComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule, CustomersRoutingModule]
})
export class CustomersModule {}
