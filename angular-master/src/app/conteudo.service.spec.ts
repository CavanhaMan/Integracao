import { TestBed } from '@angular/core/testing';

import { ConteudoService } from './conteudo.service';

describe('ConteudoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConteudoService = TestBed.get(ConteudoService);
    expect(service).toBeTruthy();
  });
});
