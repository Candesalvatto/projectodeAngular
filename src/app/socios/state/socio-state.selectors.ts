import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSocioState from './socio-state.reducer';

export const selectSocioStateState = createFeatureSelector<fromSocioState.socioState>(
  fromSocioState.socioStateFeatureKey
);

export const selectorCargandoSocios = createSelector(
  selectSocioStateState,
  (state:fromSocioState.socioState)=>{return state.loadind}
);
export const selectorSociosCargados = createSelector(
  selectSocioStateState,
  (state:fromSocioState.socioState)=>{return state.socios}
)


