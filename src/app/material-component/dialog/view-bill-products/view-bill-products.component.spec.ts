import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBilLProductsComponent } from './view-bill-products.component';

describe('ViewBilLProductsComponent', () => {
  let component: ViewBilLProductsComponent;
  let fixture: ComponentFixture<ViewBilLProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBilLProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBilLProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
