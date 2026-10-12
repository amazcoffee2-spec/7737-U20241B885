import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { Weather } from '../domain/model/weather.entity';
import { WeatherResponse, WeatherResource } from './weather.response';


export class WeatherAssembler implements BaseAssembler<Weather, WeatherResource,WeatherResponse> {

  toEntitiesFromResponse = (response: WeatherResponse): Weather[] =>
    response.weathers.map((resource) => this.toEntityFromResource(resource));

  /**
   * Converts a WeatherResource to an entity.
   * @param resource - The resource to convert.
   * @returns The converted Weather entity.
   */
  toEntityFromResource = (resource: WeatherResource): Weather =>
    new Weather({
      id: resource.id,
      temperature: resource.temperature_2m,
    });

  /**
   * Converts a SportCenter entity to a resource.
   * @param entity - The entity to convert.
   * @returns The converted SportCenterResource.
   */
  toResourceFromEntity = (entity: Weather): WeatherResource =>
    ({
      id: entity.id,

    } as WeatherResource);

}
