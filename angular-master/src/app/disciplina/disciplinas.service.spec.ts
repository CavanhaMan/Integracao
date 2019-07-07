import { TestBed } from '@angular/core/testing';

import { DisciplinasService } from './disciplinas.service';

describe('DisciplinasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisciplinasService = TestBed.get(DisciplinasService);
    expect(service).toBeTruthy();
  });
});
