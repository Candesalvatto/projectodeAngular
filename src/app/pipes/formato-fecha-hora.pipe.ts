import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatoFechaHora'
})
export class FormatoFechaHoraPipe implements PipeTransform {

  transform(fecha: Date): string {

    let resultado:string;

    resultado = `${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()} Hora: ${fecha.getHours()}:${fecha.getMinutes()} PM`;

    return resultado;
  }

}
