import { TestBed } from '@angular/core/testing';

import { ConteudosService } from './conteudos.service';

describe('ConteudosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConteudosService = TestBed.get(ConteudosService);
    expect(service).toBeTruthy();
  });
});
