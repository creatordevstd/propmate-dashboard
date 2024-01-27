import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingStatementComponent } from './building-statement.component';

describe('BuildingStatementComponent', () => {
  let component: BuildingStatementComponent;
  let fixture: ComponentFixture<BuildingStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingStatementComponent]
    });
    fixture = TestBed.createComponent(BuildingStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
