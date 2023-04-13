import { createAction, props } from '@ngrx/store';
import { Socio } from 'src/app/models/socio';

export const loadSocioStates = createAction(
  '[Lista de Socios] cargar socios'
);

export const finishSocioState = createAction(
  '[Listado de Socios] socios cargados',
  props<{ socios: Socio[] }>()
);

export const agregarSocioState = createAction(
  '[Listado de Socios] Agregando socio',
  props<{ socio: Socio }>()
);


export const editarSocioState = createAction(
  '[Listado de Socios] Editando socio',
  props<{ socio: Socio }>()
);

export const eliminarSocioState = createAction(
  '[Listado de Socios] Socio eliminado',
  props<{ socio: Socio }>()
);



