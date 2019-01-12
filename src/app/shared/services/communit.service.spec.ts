import { TestBed } from '@angular/core/testing';

import { CommunitService } from './communit.service';

describe('CommunitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommunitService = TestBed.get(CommunitService);
    expect(service).toBeTruthy();
  });
});
