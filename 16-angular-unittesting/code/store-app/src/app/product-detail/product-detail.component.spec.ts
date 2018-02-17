import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Subject } from 'rxjs/rx';

import { ProductDetailComponent } from './product-detail.component';
import { ProductsService } from '../services/products.service';

class ActivatedRouteStub {
  private subject = new Subject();

  push(value) {
    this.subject.next(value);
  }

  get params() {
    return this.subject.asObservable();
  }
}

xdescribe('ProductDetailComponent', () => {
  let fixture: ComponentFixture<ProductDetailComponent>;
  let component: ProductDetailComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, RouterTestingModule],
      declarations: [ProductDetailComponent],
      providers: [
        ProductsService,
        { provide: ActivatedRoute, useClass: ActivatedRouteStub }
      ]
    });

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
  });

  it('should show product details for a particular product', () => {
    component.product = {
      id: 1,
      name: 'iPhone 8',
      description: 'Apple smart phone',
      price: 70000,
      isAvailable: true
    };

    fixture.detectChanges();

    const nameElement: HTMLElement = fixture.debugElement.query(
      By.css('.panel-title')
    ).nativeElement;
    const descriptionElement: HTMLElement = fixture.debugElement.query(
      By.css('#description')
    ).nativeElement;
    const availabilityElement: HTMLElement = fixture.debugElement.query(
      By.css('#availability')
    ).nativeElement;
    const priceElement: HTMLElement = fixture.debugElement.query(
      By.css('#price')
    ).nativeElement;

    expect(nameElement.innerText).toContain('IPHONE 8');
    expect(descriptionElement.innerText).toContain('Apple smart phone');
    expect(availabilityElement.innerText).toContain('Available');
    expect(priceElement.innerText).toContain('70,000');
  });

  it('should redirect the user to `Product Form` component when Edit button is clicked', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.id = 1;

    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('#edit'));
    button.triggerEventHandler('click', null);

    expect(spy).toHaveBeenCalledWith(['/products', component.id, 'edit']);
  });

  it('should navigate the user to the `Not Found` component when an invalid product id is passed', () => {
    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    fixture.detectChanges();

    const route: ActivatedRouteStub = TestBed.get(ActivatedRoute);
    route.push({ id: 'abc' });

    expect(spy).toHaveBeenCalledWith(['/not-found']);
  });
});
