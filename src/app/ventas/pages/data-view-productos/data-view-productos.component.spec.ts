import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataViewProductosComponent } from './data-view-productos.component';

describe('DataViewProductosComponent', () => {
  let component: DataViewProductosComponent;
  let fixture: ComponentFixture<DataViewProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataViewProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataViewProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
