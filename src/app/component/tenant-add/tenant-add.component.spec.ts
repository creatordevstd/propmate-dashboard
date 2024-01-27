import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantAddComponent } from './tenant-add.component';

describe('TenantAddComponent', () => {
  let component: TenantAddComponent;
  let fixture: ComponentFixture<TenantAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantAddComponent]
    });
    fixture = TestBed.createComponent(TenantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
