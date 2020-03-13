import { TestBed } from '@angular/core/testing';

import { AppointetmentService } from './appointetment.service';

describe('AppointetmentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppointetmentService = TestBed.get(AppointetmentService);
    expect(service).toBeTruthy();
  });
});
