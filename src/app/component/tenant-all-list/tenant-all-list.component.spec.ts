import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantAllListComponent } from './tenant-all-list.component';

describe('TenantAllListComponent', () => {
  let component: TenantAllListComponent;
  let fixture: ComponentFixture<TenantAllListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TenantAllListComponent]
    });
    fixture = TestBed.createComponent(TenantAllListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
