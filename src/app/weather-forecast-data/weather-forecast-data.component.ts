import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetLocationService } from '../get-location/get-location.service';
import { Forcast } from '../shared/forcast';

@Component({
  selector: 'app-weather-forecast-data',
  templateUrl: './weather-forecast-data.component.html',
  styleUrls: ['./weather-forecast-data.component.css']
})
export class WeatherForecastDataComponent implements OnInit {

  zipCode:string;
  weatherForCastData: Forcast;
  constructor(
    private activatedroute: ActivatedRoute,
    private locationWeatherData: GetLocationService
  ) {
    this.activatedroute.params.subscribe((data) => {
      this.zipCode = data['zipcode'];
    });
  }


  ngOnInit() {
    this.getFiveDaysWeatherForecast();
  }

  // get 5days weather forecast details
  getFiveDaysWeatherForecast() {
    this.locationWeatherData.getWeatherForeCastDetails(this.zipCode).subscribe(data => {
      this.weatherForCastData = data as Forcast;
    });
  }
  
}



