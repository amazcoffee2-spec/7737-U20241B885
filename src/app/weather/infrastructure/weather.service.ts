import { inject, Service } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Weather } from '../domain/model/weather.entity';

import { WeatherApiEndpoint } from './weather-api-endpoint';


@Service()
export class WeatherService extends BaseApi {
  private readonly http = inject(HttpClient);

    private readonly weatherEndPoint = new WeatherApiEndpoint(this.http);

  getWeather = (): Observable<Weather[]> => this.weatherEndPoint.getAll();


  getWeatherById = (id: number): Observable<Weather> =>
    this.weatherEndPoint.getById(id);

  /**
   * Creates a new weather.
   * @param weather - The weather to create.
   * @returns An Observable containing the created weather.
   */
  createWeather = (weather: Weather): Observable<Weather> =>
    this.weatherEndPoint.create(weather);


}
