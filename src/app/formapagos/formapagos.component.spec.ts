import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormapagosComponent } from './formapagos.component';

describe('FormapagosComponent', () => {
  let component: FormapagosComponent;
  let fixture: ComponentFixture<FormapagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormapagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormapagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
