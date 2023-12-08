import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingMaintenanceComponent } from './building-maintenance.component';

describe('BuildingMaintenanceComponent', () => {
  let component: BuildingMaintenanceComponent;
  let fixture: ComponentFixture<BuildingMaintenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingMaintenanceComponent]
    });
    fixture = TestBed.createComponent(BuildingMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
