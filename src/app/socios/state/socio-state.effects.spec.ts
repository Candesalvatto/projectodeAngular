import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { SocioStateEffects } from './socio-state.effects';

describe('SocioStateEffects', () => {
  let actions$: Observable<any>;
  let effects: SocioStateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SocioStateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(SocioStateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
