import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopingComponent } from './coping.component';

describe('CopingComponent', () => {
  let component: CopingComponent;
  let fixture: ComponentFixture<CopingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CopingComponent]
    });
    fixture = TestBed.createComponent(CopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
