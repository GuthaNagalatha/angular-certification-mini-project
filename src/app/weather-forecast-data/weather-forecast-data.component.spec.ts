import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherForecastDataComponent } from './weather-forecast-data.component';

describe('WeatherForecastDataComponent', () => {
  let component: WeatherForecastDataComponent;
  let fixture: ComponentFixture<WeatherForecastDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherForecastDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherForecastDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
