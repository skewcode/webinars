import { ProductsComponent } from './products.component';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';
import { AppError } from '../common/app-error';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let service: ProductsService;

  beforeEach(() => {
    service = new ProductsService(null);
    component = new ProductsComponent(service);
  });

  it('should set products property with the items returned from the server', () => {
    // Arrange - Setup
    const products: Product[] = [
      {
        id: 1,
        name: 'p1',
        description: 'p1 description',
        price: 10,
        isAvailable: true
      },
      {
        id: 2,
        name: 'p2',
        description: 'p2 description',
        price: 20,
        isAvailable: false
      },
      {
        id: 3,
        name: 'p3',
        description: 'p3 description',
        price: 30,
        isAvailable: true
      }
    ];

    spyOn(service, 'getProducts').and.callFake(() => {
      return Observable.from([products]);
    });

    // spyOn(service, 'getProducts').and.returnValue(Observable.from([products]));

    // Act - Make the actual call
    component.ngOnInit();

    // Assert - Check and report whether the test is pass or fail
    expect(component.products).toEqual(products);
  });

  it('should set the error property if server returns an error when getting products', () => {
    const error = new AppError('server error');
    spyOn(service, 'getProducts').and.returnValue(Observable.throw(error));

    expect(component.error).not.toBeDefined();

    component.ngOnInit();

    expect(component.error).toBeDefined();
    expect(component.error.originalError).toEqual('server error');
  });

  xit('should call the server to delete a product if the user confirms', () => {
    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'deleteProduct').and.returnValue(
      Observable.empty()
    );

    const productId = 1;
    component.onDelete(productId);

    expect(spy).toHaveBeenCalledWith(productId);
  });

  xit('should NOT call the server to delete a product if the user cancels', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    const spy = spyOn(service, 'deleteProduct').and.returnValue(
      Observable.empty()
    );

    const productId = 1;
    component.onDelete(productId);

    expect(spy).not.toHaveBeenCalledWith(productId);
  });

  xit('should delete the product from the products array within the component', () => {
    component.products = [
      {
        id: 1,
        name: 'p1',
        description: 'p1 description',
        price: 10,
        isAvailable: true
      },
      {
        id: 2,
        name: 'p2',
        description: 'p2 description',
        price: 20,
        isAvailable: false
      }
    ];

    spyOn(window, 'confirm').and.returnValue(true);
    const spy = spyOn(service, 'deleteProduct').and.returnValue(
      Observable.from([null])
    );

    const productId = 2;
    component.onDelete(productId);

    const index = component.products.findIndex(
      product => product.id === productId
    );
    expect(index).toBeLessThan(0);
  });
});
