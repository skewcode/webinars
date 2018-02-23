import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';

import { Product } from '../models/product';
import { AppError } from '../common/app-error';

@Injectable()
export class ProductsService {
  private apiUrl = 'http://localhost:3000/products';
  private products: Product[] = [];

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiUrl).catch(this.handleError);
  }

  getProduct(id: number): Observable<Product> {
    return this.httpClient
      .get<Product>(`${this.apiUrl}/${id}`)
      .catch(this.handleError);
  }

  addProduct(product: Product): Observable<Product> {
    return this.httpClient
      .post<Product>(this.apiUrl, product)
      .catch(this.handleError);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.httpClient
      .patch<Product>(`${this.apiUrl}/${id}`, product)
      .catch(this.handleError);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient
      .delete<Product>(`${this.apiUrl}/${id}`)
      .catch(this.handleError);
  }

  private handleError(error: HttpResponse<any>) {
    return Observable.throw(new AppError(error));
  }
}
