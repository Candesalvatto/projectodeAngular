import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectorAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectorSesionState = createSelector(
  selectorAuthState,
  (state) => state.sesion
);

export const selectorSesionActiva = createSelector(
  selectorAuthState,
  (state) => state.sesion.sesionActiva
);

export const selectorUsuarioActivo = createSelector(
  selectorAuthState,
  (state) => state.sesion.usuarioActivo
);
