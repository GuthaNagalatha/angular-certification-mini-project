import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherForecastDataComponent } from './weather-forecast-data/weather-forecast-data.component';
import{GetLocationComponent} from './get-location/get-location.component';
const routes: Routes = [
  { path:'weatherData',component:GetLocationComponent},
  { path:'forecast/:zipcode',component:WeatherForecastDataComponent},
  { path: '**', redirectTo: 'weatherData' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
