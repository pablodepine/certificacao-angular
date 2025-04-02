import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personName'
})
export class PersonNamePipe implements PipeTransform {

  transform(value: string, displayPrefix: boolean = true): string {
    return displayPrefix ? `Mr./Ms. ${value}` : value;
  }

}
