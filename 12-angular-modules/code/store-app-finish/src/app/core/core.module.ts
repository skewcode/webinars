import { NgModule } from '@angular/core';

// Core components
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Services
import { LoggingService } from '../services/logging.service';
import { ProductsService } from '../services/products.service';
import { CustomersService } from '../services/customers.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [NavComponent, HomeComponent, NotFoundComponent],
  imports: [AppRoutingModule],
  exports: [NavComponent, AppRoutingModule],
  providers: [LoggingService, ProductsService, CustomersService]
})
export class CoreModule {}
