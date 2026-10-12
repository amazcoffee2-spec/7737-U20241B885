import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { Weather } from '../domain/model/weather.entity';
  import { WeatherResponse, WeatherResource } from './weather.response';
import { WeatherAssembler } from './weather.assembler';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';




export class WeatherApiEndpoint extends BaseApiEndpoint<Weather, WeatherResource, WeatherResponse, WeatherAssembler> {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.weatherProviderApiBaseUrl}${environment.weatherTemperatureEndpointPath}`,
      new WeatherAssembler(),
    );
  }
}
