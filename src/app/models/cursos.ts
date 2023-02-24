import { Profesor } from './profesores';


export interface Curso {
  id: number;
  titulo: string;
  modalidad: string;
  duracion: string;
  cupo: boolean;
  profesor: Profesor,
  clasesSemanales: number,
  fechaInicio:Date,
}
