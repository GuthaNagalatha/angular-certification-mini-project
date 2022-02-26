import { Component, Input, Output,EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent {

  constructor(private toaster:ToastrService) { }
  @Input() weatherDetails:any;
  @Output() reload:EventEmitter<any> = new EventEmitter<any>();
  remove(zipcode: string) {
    if (this.weatherDetails && this.weatherDetails.length > 0) {
      console.log(this.weatherDetails);
      this.weatherDetails = this.weatherDetails.filter((data:any) => data.zipcode !== zipcode);
      this.toaster.success("Removed location Succesfully");
      localStorage.setItem(
        'weatherData',
        JSON.stringify(this.weatherDetails)
      );
      this.reloadWeatherData();
    }
  }

  reloadWeatherData(){
    this.reload.emit('relaod');
  }

}
