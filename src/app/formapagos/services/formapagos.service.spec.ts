import { TestBed } from '@angular/core/testing';

import { FormapagosService } from './formapagos.service';

describe('FormapagosService', () => {
  let service: FormapagosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormapagosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
