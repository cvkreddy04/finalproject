import { TestBed } from '@angular/core/testing';

import { Ac3serviceService } from './ac3service.service';

describe('Ac3serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ac3serviceService = TestBed.get(Ac3serviceService);
    expect(service).toBeTruthy();
  });
});
