import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetLocationComponent } from './get-location/get-location.component';
import { WeatherDataComponent } from './weather-data/weather-data.component';
import { WeatherForecastDataComponent } from './weather-forecast-data/weather-forecast-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TemperatureConverterPipe } from './shared/temperature-converter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    GetLocationComponent,
    WeatherDataComponent,
    WeatherForecastDataComponent,
    TemperatureConverterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-top-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
