import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  id: number;
  product: Product;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.getProduct();
      }
    );
  }

  private getProduct() {
    this.product = this.productsService.getProduct(this.id);

    if(!this.product) {
      this.product = new Product();
    }
  }

  onEdit() {
    this.loggingService.logMessage('Product Detail - Edit button clicked.');
    this.router.navigate(['/products', this.id, 'edit']);
  }

  onDelete() {
    this.loggingService.logMessage('Product Detail - Delete button clicked.');
    this.productsService.deleteProduct(this.id);
    this.router.navigate(['/products']);
  }
}
