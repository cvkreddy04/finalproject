import { TestBed } from '@angular/core/testing';

import { Ac4serviceService } from './ac4service.service';

describe('Ac4serviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ac4serviceService = TestBed.get(Ac4serviceService);
    expect(service).toBeTruthy();
  });
});
