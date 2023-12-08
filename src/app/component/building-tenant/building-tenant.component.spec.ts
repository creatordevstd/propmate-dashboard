import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingTenantComponent } from './building-tenant.component';

describe('BuildingTenantComponent', () => {
  let component: BuildingTenantComponent;
  let fixture: ComponentFixture<BuildingTenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingTenantComponent]
    });
    fixture = TestBed.createComponent(BuildingTenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
