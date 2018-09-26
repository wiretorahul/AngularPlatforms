import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CapslockPipe'
})
export class CapslockPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   return value.charAt(0).toUpperCase() + value.slice(1);
  }

}