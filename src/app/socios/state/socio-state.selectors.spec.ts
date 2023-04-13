import * as fromSocioState from './socio-state.reducer';
import { selectSocioStateState } from './socio-state.selectors';

describe('SocioState Selectors', () => {
  it('should select the feature state', () => {
    const result = selectSocioStateState({
      [fromSocioState.socioStateFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
