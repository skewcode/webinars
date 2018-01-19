import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  id: number;
  product: Product;
  addNew = false;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => (this.id = +params['id']));

    if (!isNaN(this.id)) {
      this.product = this.productsService.getProduct(this.id);
    }

    if (!this.product) {
      this.product = new Product();
      this.addNew = true;
    }
  }

  onSave() {
    this.loggingService.logMessage('Product Form - Save button clicked.');
    if (this.addNew) {
      this.productsService.addProduct(this.product);
      this.router.navigate(['/products']);
    } else {
      this.productsService.updateProduct(this.id, this.product);
      this.router.navigate(['/products', this.id]);
    }
  }
}
