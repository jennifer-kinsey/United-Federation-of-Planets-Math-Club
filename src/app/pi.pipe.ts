import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'pi',
  pure: false
})
export class PiPipe implements PipeTransform {

  transform(input: Member[], piCount){
    var output: Member[] = [];
    if(piCount === "highPis") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].recitesTo > 99) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
