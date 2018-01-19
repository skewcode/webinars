import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Feature Modules
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ProductsModule, CustomersModule, CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
