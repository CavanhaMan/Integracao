import { TestBed } from '@angular/core/testing';

import { AreaConhecimentosService } from './area-conhecimentos.service';

describe('AreaConhecimentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaConhecimentosService = TestBed.get(AreaConhecimentosService);
    expect(service).toBeTruthy();
  });
});
