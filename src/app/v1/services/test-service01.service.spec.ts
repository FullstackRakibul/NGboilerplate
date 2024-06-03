import { TestBed } from '@angular/core/testing';

import { TestService01Service } from './test-service01.service';

describe('TestService01Service', () => {
  let service: TestService01Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService01Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
