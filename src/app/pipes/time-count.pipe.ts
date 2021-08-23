import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeCount'
})
export class TimeCountPipe implements PipeTransform {

  transform(value: any): number {
    var currentDate = new Date();
    var currentDateWithNoTime: any = currentDate;
    var diff = Math.abs(value - currentDateWithNoTime);
    var minutes = Math.floor((diff/1000)/60);

    if (minutes > 1 && value > currentDateWithNoTime) {
      return minutes;
    }

    else {
      return 0;
    }
  }
}
