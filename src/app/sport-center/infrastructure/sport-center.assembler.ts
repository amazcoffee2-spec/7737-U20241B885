import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { SportCenter } from '../domain/model/sport-center.entity';
import { SportCenterResponse, SportCenterResource } from './sport-center.response';


export class SportCenterAssembler implements BaseAssembler<SportCenter, SportCenterResource,SportCenterResponse> {

  toEntitiesFromResponse = (response: SportCenterResponse): SportCenter[] =>
    response.sportCenters.map((resource) => this.toEntityFromResource(resource));

  /**
   * Converts a SportCenterResource to an entity.
   * @param resource - The resource to convert.
   * @returns The converted SportCenter entity.
   */
  toEntityFromResource = (resource: SportCenterResource): SportCenter =>
    new SportCenter({
      id: resource.id,
      name: resource.name,
      activityType: resource.activityType,
      capacity: resource.capacity,
      latitude: resource.latitude,
      longitude: resource.longitude
    });

  /**
   * Converts a SportCenter entity to a resource.
   * @param entity - The entity to convert.
   * @returns The converted SportCenterResource.
   */
  toResourceFromEntity = (entity: SportCenter): SportCenterResource =>
    ({
      id: entity.id,
      name: entity.name,
      activityType: entity.activityType,
      capacity: entity.capacity,
      latitude: entity.latitude,
      longitude: entity.longitude
    } as SportCenterResource);

}
