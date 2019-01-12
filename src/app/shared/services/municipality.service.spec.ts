import { TestBed } from '@angular/core/testing';

import { MunicipalityService } from './municipality.service';

describe('MunicipalityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MunicipalityService = TestBed.get(MunicipalityService);
    expect(service).toBeTruthy();
  });
});
