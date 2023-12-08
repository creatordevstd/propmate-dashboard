import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerFinanceComponent } from './owner-finance.component';

describe('OwnerFinanceComponent', () => {
  let component: OwnerFinanceComponent;
  let fixture: ComponentFixture<OwnerFinanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OwnerFinanceComponent]
    });
    fixture = TestBed.createComponent(OwnerFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
