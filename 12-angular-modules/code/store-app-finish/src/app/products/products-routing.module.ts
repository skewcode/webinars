import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Product components
import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFormComponent } from './product-form/product-form.component';

const productRoutes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: ':id', component: ProductDetailComponent },
      { path: ':id/edit', component: ProductFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}
