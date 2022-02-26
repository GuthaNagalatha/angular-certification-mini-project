import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter'
})
export class TemperatureConverterPipe implements PipeTransform {

  transform(value: number) {
    if(value){
      value = value-273.15;
    }
    return value.toFixed(1)+'°C';
  }

}
