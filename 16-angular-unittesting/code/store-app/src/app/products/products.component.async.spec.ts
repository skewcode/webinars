import {
  TestBed,
  ComponentFixture,
  async,
  fakeAsync,
  tick
} from '@angular/core/testing';
import { Observable } from 'rxjs/rx';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { ProductsComponent } from './products.component';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product';

xdescribe('ProductsComponent (async)', () => {
  let fixture: ComponentFixture<ProductsComponent>;
  let component: ProductsComponent;
  let service: ProductsService;
  let testProducts: Product[];

  beforeEach(() => {
    testProducts = [
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

    TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [RouterTestingModule, HttpModule],
      providers: [ProductsService]
    });

    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ProductsService);
  });

  it('should set products property with the items returned from the server (Observable)', () => {
    spyOn(service, 'getProducts').and.returnValue(
      Observable.from([testProducts])
    );

    fixture.detectChanges();

    expect(component.products).toEqual(testProducts);
  });

  xit(
    'should set products property with the items returned from the server (Promise, async, whenStable)',
    async(() => {
      spyOn(service, 'getProductsPromise').and.returnValue(
        Promise.resolve(testProducts)
      );

      fixture.detectChanges();

      fixture
        .whenStable()
        .then(() => expect(component.products).toEqual(testProducts));
    })
  );

  xit(
    'should set products property with the items returned from the server (Promise, fakeAsync, tick)',
    fakeAsync(() => {
      spyOn(service, 'getProductsPromise').and.returnValue(
        Promise.resolve(testProducts)
      );

      fixture.detectChanges();

      tick();
      expect(component.products).toEqual(testProducts);
    })
  );
});
