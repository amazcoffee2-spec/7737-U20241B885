import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

/**
 * Resource representation of a weather.
 */
export interface WeatherResource extends BaseResource {
  time: string;
  interval:number;
  temperature_2m: number;
}


export interface WeatherResponse extends BaseResponse {

  weathers: WeatherResource[];
}
