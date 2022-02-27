import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class GetLocationService {

  constructor(
    private http: HttpClient
  ) { }

  url = 'http://api.openweathermap.org/data/2.5/';
  id = '5a4b2d457ecbef9eb2a71e480b947604';

  getWeatherDetails(zipCode:string){
    return this.http.get(this.url + 'weather?zip='+zipCode+',in&appid='+this.id)
  }

  getWeatherForeCastDetails(zipCode:string) {
    return this.http.get(this.url + 'forecast/daily?zip='+zipCode+',in&appid='+this.id);
  }

}
