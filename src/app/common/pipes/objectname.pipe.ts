import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectname'
})
export class ObjectnamePipe implements PipeTransform {

  transform(obj: any): string {
    if (obj !== null && obj !== undefined) {
      if (typeof obj === 'object') {
        const keys = Object.keys(obj);
        if (keys.length > 0) {
          return keys[0];
        }
      }
    }
    return '';
  }

}
