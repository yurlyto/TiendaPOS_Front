import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoFormapagosComponent } from './listado-formapagos.component';

describe('ListadoFormapagosComponent', () => {
  let component: ListadoFormapagosComponent;
  let fixture: ComponentFixture<ListadoFormapagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoFormapagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoFormapagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
