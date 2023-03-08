import { TestBed } from '@angular/core/testing';

import { ServicesSociosService } from './services-socios.service';

describe('ServicesSociosService', () => {
  let service: ServicesSociosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesSociosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
