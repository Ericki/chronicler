import { TestBed } from '@angular/core/testing';

import { CrudDataService } from './crud-data.service';

describe('CrudDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudDataService = TestBed.get(CrudDataService);
    expect(service).toBeTruthy();
  });
});
