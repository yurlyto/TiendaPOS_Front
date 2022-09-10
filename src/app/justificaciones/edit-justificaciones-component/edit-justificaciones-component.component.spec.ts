import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJustificacionesComponentComponent } from './edit-justificaciones-component.component';

describe('EditJustificacionesComponentComponent', () => {
  let component: EditJustificacionesComponentComponent;
  let fixture: ComponentFixture<EditJustificacionesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditJustificacionesComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJustificacionesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
