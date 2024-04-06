import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsianPage } from './asian.page';

describe('AsianPage', () => {
  let component: AsianPage;
  let fixture: ComponentFixture<AsianPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
