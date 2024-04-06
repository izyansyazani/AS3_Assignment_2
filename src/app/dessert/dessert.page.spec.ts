import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DessertPage } from './dessert.page';

describe('DessertPage', () => {
  let component: DessertPage;
  let fixture: ComponentFixture<DessertPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DessertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
