import { createFeature, createReducer, on } from '@ngrx/store';
import * as SocioStateActions from './socio-state.actions';
import { Socio } from 'src/app/models/socio';

export const socioStateFeatureKey = 'socioState';

export interface socioState {
  loadind: boolean;
  socios: Socio[];
}

export const initialState: socioState = {
  loadind: false,
  socios: []
};

export const reducer = createReducer(
  initialState,
  on(SocioStateActions.loadSocioStates, (state) => {
    const newState: socioState = {
      loadind: true,
      socios: []
    }
    return newState
  }),
  on (SocioStateActions.finishSocioState,(state, {socios})=> {
    return {...state, loadind: false, socios: socios}
  }),
//   on (SocioStateActions.agregarSocioState,(state, {socio: Socio})=> {
//     return state;
// }),
on (SocioStateActions.editarSocioState,(state, {socio: Socio})=> {
  return state;
}),
on (SocioStateActions.eliminarSocioState,(state, {socio: Socio})=> {
  return state;
}),

);





