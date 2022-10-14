import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormapagosComponent } from './edit-formapagos.component';

describe('EditFormapagosComponent', () => {
  let component: EditFormapagosComponent;
  let fixture: ComponentFixture<EditFormapagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormapagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormapagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
