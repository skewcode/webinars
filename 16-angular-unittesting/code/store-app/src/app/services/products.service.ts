import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';
import { AppError } from '../common/app-error';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  private products: Product[] = [];

  constructor(private http: Http) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getProductsPromise(): Promise<Product[]> {
    return this.http
      .get(this.apiUrl)
      .map((response: Response) => response.json())
      .catch(this.handleError)
      .toPromise();
  }

  getProduct(id: number) {
    return this.http
      .get(`${this.apiUrl}/${id}`)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  addProduct(product: Product) {
    return this.http
      .post(this.apiUrl, product)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  updateProduct(id: number, product: Product) {
    return this.http
      .patch(`${this.apiUrl}/${id}`, product)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  deleteProduct(id: number) {
    return this.http
      .delete(`${this.apiUrl}/${id}`)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    return Observable.throw(new AppError(error));
  }
}
