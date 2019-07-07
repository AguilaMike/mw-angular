import { async, TestBed } from '@angular/core/testing';
import { MwComplexFilterModule } from './mw-complex-filter.module';

describe('MwComplexFilterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MwComplexFilterModule],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MwComplexFilterModule).toBeDefined();
  });
});
