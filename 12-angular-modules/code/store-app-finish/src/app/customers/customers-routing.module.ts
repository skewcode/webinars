import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';

const customerRoutes: Routes = [
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: ':id', component: CustomerDetailComponent },
      { path: ':id/edit', component: CustomerFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule {}
