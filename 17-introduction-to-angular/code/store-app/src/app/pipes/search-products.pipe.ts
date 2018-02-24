import { PipeTransform, Pipe } from '@angular/core';

import { Product } from '../models/product';

@Pipe({
  name: 'searchProducts'
})
export class SearchProducts implements PipeTransform {
  transform(products: Product[], searchText: string, field: string) {
    const filteredProducts =
      searchText.length === 0
        ? products
        : products.filter(
            product =>
              product[field].toLowerCase().indexOf(searchText.toLowerCase()) >=
              0
          );
    return filteredProducts;
  }
}
