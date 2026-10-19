import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitWords',
  standalone: true
})
export class LimitWordsPipe implements PipeTransform {

  transform(term: string, count: number, flag: boolean): string {
    if (flag)
      return term.split(/\s/).slice(0, count).join(" ");
    else
      return ``
  }

}
