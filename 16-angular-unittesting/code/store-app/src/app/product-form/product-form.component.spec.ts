import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { ProductFormComponent } from './product-form.component';
import { ProductsService } from '../services/products.service';

xdescribe('ProductFormComponent', () => {
  let fixture: ComponentFixture<ProductFormComponent>;
  let component: ProductFormComponent;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductFormComponent],
      imports: [FormsModule, HttpModule, RouterTestingModule],
      providers: [ProductsService]
    });

    fixture = TestBed.createComponent(ProductFormComponent);
    component = fixture.componentInstance;

    // Get service instance if registered with providers array of module
    service = TestBed.get(ProductsService);

    // Get service instance if registered with providers array within the component
    // service = fixture.debugElement.injector.get(ProductsService);
  });

  it(
    'should show product details for a particular product',
    async(() => {
      const product = {
        id: 1,
        name: 'iPhone 8',
        description: 'Apple smart phone',
        price: 70000,
        isAvailable: true
      };

      component.product = product;

      fixture.detectChanges();

      fixture.whenStable().then(() => {
        const nameElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#productName')
        ).nativeElement;
        const descriptionElement: HTMLTextAreaElement = fixture.debugElement.query(
          By.css('#productDescription')
        ).nativeElement;
        const isAvailableElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#productIsAvailable')
        ).nativeElement;
        const priceElement: HTMLInputElement = fixture.debugElement.query(
          By.css('#productPrice')
        ).nativeElement;

        expect(nameElement.value).toContain(product.name);
        expect(descriptionElement.value).toContain(product.description);
        expect(isAvailableElement.checked).toBeTruthy();
        expect(priceElement.value).toContain(product.price.toString());
      });
    })
  );

  it('should save product details when form is submitted', () => {
    component.addNew = true;
    const spy = spyOn(service, 'addProduct').and.returnValue(
      Observable.empty()
    );

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', null);

    // const button = fixture.debugElement.query(By.css('#save'));
    // button.nativeElement.click();

    expect(spy).toHaveBeenCalled();
  });
});
