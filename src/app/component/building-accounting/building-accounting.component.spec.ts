import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingAccountingComponent } from './building-accounting.component';

describe('BuildingAccountingComponent', () => {
  let component: BuildingAccountingComponent;
  let fixture: ComponentFixture<BuildingAccountingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingAccountingComponent]
    });
    fixture = TestBed.createComponent(BuildingAccountingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
