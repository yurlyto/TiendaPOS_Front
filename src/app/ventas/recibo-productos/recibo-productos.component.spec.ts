import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciboProductosComponent } from './recibo-productos.component';

describe('ReciboProductosComponent', () => {
  let component: ReciboProductosComponent;
  let fixture: ComponentFixture<ReciboProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReciboProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciboProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
