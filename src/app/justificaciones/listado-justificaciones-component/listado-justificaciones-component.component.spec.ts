import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoJustificacionesComponentComponent } from './listado-justificaciones-component.component';

describe('ListadoJustificacionesComponentComponent', () => {
  let component: ListadoJustificacionesComponentComponent;
  let fixture: ComponentFixture<ListadoJustificacionesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoJustificacionesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoJustificacionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
