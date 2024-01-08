import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasterComponent } from './plaster.component';

describe('PlasterComponent', () => {
  let component: PlasterComponent;
  let fixture: ComponentFixture<PlasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlasterComponent]
    });
    fixture = TestBed.createComponent(PlasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
