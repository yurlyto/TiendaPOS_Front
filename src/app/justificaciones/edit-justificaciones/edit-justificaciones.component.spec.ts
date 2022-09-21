import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJustificacionesComponent } from './edit-justificaciones.component';

describe('EditJustificacionesComponent', () => {
  let component: EditJustificacionesComponent;
  let fixture: ComponentFixture<EditJustificacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJustificacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJustificacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
