import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoJustificacionesComponent } from './listado-justificaciones.component';

describe('ListadoJustificacionesComponent', () => {
  let component: ListadoJustificacionesComponent;
  let fixture: ComponentFixture<ListadoJustificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoJustificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoJustificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
