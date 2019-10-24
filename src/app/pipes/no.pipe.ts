import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'no'
})
export class NoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
