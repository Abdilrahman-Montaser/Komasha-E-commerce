import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: any[], term: string): any[] {
    return arr.filter((pro) => pro.title.toLowerCase().startsWith(term.toLowerCase()));
  }

}
