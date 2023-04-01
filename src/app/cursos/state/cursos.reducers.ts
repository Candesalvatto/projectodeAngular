// import { createReducer, on } from "@ngrx/store";
// import { CursoState } from "src/app/models/curso.state";
// import { cargarCursos, cursosCargados } from "./cursos.actions";

// const initialState: CursoState = {
//   loadind: false,
//   cursos: []
// }

// export const cursosReducer = createReducer(
//   initialState,
//   on(cargarCursos, (state) => {
//       const newState: CursoState = {
//           loadind: true,
//           cursos: state.cursos
//       }
//       return newState
//   }),


//   on(cursosCargados, (state, { cursos }) => {
//       const newState: CursoState = {
//         loadind: false,
//         cursos: cursos
//       }
//       return newState
//   })
// );
