import { Component,  OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {GetLocationService} from './get-location.service';
import { WeatherData } from '../shared/weather-data';
@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})

export class GetLocationComponent implements OnInit {

  weatherDetails : WeatherData[] = new Array();
  zipCode: string;
  constructor(
    private locationWeatherData: GetLocationService,
    private toaster: ToastrService
  ) { }

  ngOnInit(): void {
    this.getLocationCurrentWeatherData();
  }

  // get the list of stored weather data
  getLocationCurrentWeatherData() {    
    const weatherList =  localStorage.getItem('weatherData');
    if (weatherList) this.weatherDetails = JSON.parse(weatherList);
  }

  // getting weather,location details using zipcode
  getLocationCurrentWeather(zipCode: string) {
    if (zipCode && zipCode !== '') {
      let existed = false;
      if(this.weatherDetails){
        this.weatherDetails.forEach((data:WeatherData) => {
          if (data.zipcode === zipCode) existed = true;
        });
      }
      if (!existed) {
        this.locationWeatherData.getWeatherDetails(zipCode).subscribe({next: (WeatherData)  => {
          if(WeatherData) {
            WeatherData = {...WeatherData,zipcode:zipCode};
            let weatherData = WeatherData as WeatherData;
            this.weatherDetails.push(weatherData);
            localStorage.setItem(
              'weatherData',
              JSON.stringify(this.weatherDetails)
            );
            this.toaster.success("Location Weather data added successfully");
          }
         
        },
        error: () => this.toaster.warning("Entered invalid Zipcode / data not available")
        })
      } else {
        this.toaster.warning("zipcode already exists.");
      }
      this.zipCode = '';
    } else {
      this.toaster.warning("Please enter zipcode.");
    }
  }
  remove(zipcode: string) {
    if (this.weatherDetails && this.weatherDetails.length > 0) {
      this.weatherDetails = this.weatherDetails.filter((data:WeatherData) => data.zipcode !== zipcode);
      this.toaster.success("Location Weather data removed Succesfully");
      localStorage.setItem(
        'weatherData',
        JSON.stringify(this.weatherDetails)
      );
     
    }
  }
  
}
