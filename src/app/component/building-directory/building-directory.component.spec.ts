import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDirectoryComponent } from './building-directory.component';

describe('BuildingDirectoryComponent', () => {
  let component: BuildingDirectoryComponent;
  let fixture: ComponentFixture<BuildingDirectoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingDirectoryComponent]
    });
    fixture = TestBed.createComponent(BuildingDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
