import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';
import { AppError } from '../common/app-error';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  error: AppError;
  searchText = '';

  constructor(private service: ProductsService) {}

  ngOnInit() {
    this.service.getProducts().subscribe(
      (products: Product[]) => {
        console.log('Success! Get Products Successful!');
        this.products = products;
      },
      (error: AppError) => {
        this.error = error;
        console.log('Failed! Error occurred when getting products.', error);
      }
    );
  }

  onDelete(productId) {
    if (confirm('Are you sure?')) {
      this.service.deleteProduct(productId).subscribe(
        () => {
          console.log('Success! Delete Product Successful!');
          this.products = this.products.filter(
            product => product.id !== productId
          );
        },
        (error: AppError) => {
          this.error = error;
          console.log('Failed! Error occurred when deleting product.', error);
        }
      );
    }
  }
}
