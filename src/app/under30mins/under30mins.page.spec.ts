import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Under30minsPage } from './under30mins.page';

describe('Under30minsPage', () => {
  let component: Under30minsPage;
  let fixture: ComponentFixture<Under30minsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Under30minsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
