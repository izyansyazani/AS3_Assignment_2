import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItalianPage } from './italian.page';

describe('ItalianPage', () => {
  let component: ItalianPage;
  let fixture: ComponentFixture<ItalianPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItalianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
