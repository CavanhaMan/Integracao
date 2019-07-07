import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaConhecimentoComponent } from './area-conhecimento.component';

describe('AreaConhecimentoComponent', () => {
  let component: AreaConhecimentoComponent;
  let fixture: ComponentFixture<AreaConhecimentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreaConhecimentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaConhecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
