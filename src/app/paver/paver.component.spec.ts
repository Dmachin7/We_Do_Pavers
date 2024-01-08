import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaverComponent } from './paver.component';

describe('PaverComponent', () => {
  let component: PaverComponent;
  let fixture: ComponentFixture<PaverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaverComponent]
    });
    fixture = TestBed.createComponent(PaverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
