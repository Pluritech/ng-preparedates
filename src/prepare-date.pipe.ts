import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepareDate',
})
export class PrepareDatePipe implements PipeTransform {
  transform(value: string) {
    if (!value) {
      return value;
    };

    if (/^\d{4}-\d{2}-\d{2}/.test(value)) {
      return new Date(value.replace(/-/g, '/'));
    }

    return Number.parseFloat(value) * 1000;
  }
}
