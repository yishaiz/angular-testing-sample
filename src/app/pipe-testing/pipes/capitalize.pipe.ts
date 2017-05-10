import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(text : string, args : any[]) : any {
    return text.split(' ').map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }).join(' ');
  }

}
