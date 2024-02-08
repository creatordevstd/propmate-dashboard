import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingDocumentsComponent } from './building-documents.component';

describe('BuildingDocumentsComponent', () => {
  let component: BuildingDocumentsComponent;
  let fixture: ComponentFixture<BuildingDocumentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuildingDocumentsComponent]
    });
    fixture = TestBed.createComponent(BuildingDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
