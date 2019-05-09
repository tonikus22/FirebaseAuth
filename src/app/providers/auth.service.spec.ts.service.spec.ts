import { TestBed } from '@angular/core/testing';

import { Auth.Service.Spec.TsService } from './auth.service.spec.ts.service';

describe('Auth.Service.Spec.TsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Auth.Service.Spec.TsService = TestBed.get(Auth.Service.Spec.TsService);
    expect(service).toBeTruthy();
  });
});
