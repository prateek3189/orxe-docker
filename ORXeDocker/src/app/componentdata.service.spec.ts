import { TestBed } from '@angular/core/testing';

import { ComponentdataService } from './componentdata.service';

describe('ComponentdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComponentdataService = TestBed.get(ComponentdataService);
    expect(service).toBeTruthy();
  });
});
