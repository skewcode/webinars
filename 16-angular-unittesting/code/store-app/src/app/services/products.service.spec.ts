import {
  HttpModule,
  XHRBackend,
  Response,
  ResponseOptions,
  RequestMethod
} from '@angular/http';
import { TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ProductsService } from './products.service';

xdescribe('ProductsService', () => {
  const apiUrl = 'http://localhost:3000/products';
  let service: ProductsService;
  let mockBackend: MockBackend;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ProductsService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });

    service = TestBed.get(ProductsService);
    mockBackend = TestBed.get(XHRBackend);
  });

  it('should get the list of products from the server', () => {
    const testProducts = [
      {
        id: 1,
        name: 'p1'
      },
      {
        id: 2,
        name: 'p2'
      },
      {
        id: 3,
        name: 'p3'
      }
    ];

    // Arrange
    mockBackend.connections.subscribe((connection: MockConnection) => {
      expect(connection.request.method).toBe(RequestMethod.Get);
      expect(connection.request.url).toBe(apiUrl);

      connection.mockRespond(
        new Response(
          new ResponseOptions({
            body: testProducts
          })
        )
      );
    });

    // Act
    service.getProducts().subscribe(products => {
      expect(products.length).toEqual(3);
      expect(products[0].name).toEqual('p1');
      expect(products[1].name).toEqual('p2');
      expect(products[2].name).toEqual('p3');
    });
  });
});
