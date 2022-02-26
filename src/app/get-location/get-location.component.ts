import { Component,  OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {GetLocationService} from './get-location.service'
@Component({
  selector: 'app-get-location',
  templateUrl: './get-location.component.html',
  styleUrls: ['./get-location.component.css']
})

export class GetLocationComponent implements OnInit {

  weatherDetails: any;
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
      this.weatherDetails.forEach((data:any) => {
        if (data.zipcode === zipCode) existed = true;
      });
      if (!existed) {
        this.locationWeatherData.getWeatherDetails(zipCode).subscribe(data =>{
          if(data) {
            data = { ...data, zipcode: zipCode };
            this.weatherDetails.push(data);
            localStorage.setItem(
              'weatherData',
              JSON.stringify(this.weatherDetails)
            );
            this.toaster.success("Weather data added successfully");
          }
          this.zipCode = '';
        })
       
        ;
      } else {
        this.zipCode = '';
        this.toaster.warning("zipcode already exists.");
      }
    } else {
      this.toaster.warning("Please enter zipcode.");
    }
  }
  reload(event:any){
    this.getLocationCurrentWeatherData();
  }
}
