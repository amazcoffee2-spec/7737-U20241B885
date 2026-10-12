import { BaseAssembler } from '../../shared/infrastructure/base-assembler';
import { Reservation } from '../domain/model/reservation.entity';
import { ReservationResponse, ReservationResource } from './reservation.response';


export class ReservationAssembler implements BaseAssembler<Reservation, ReservationResource,ReservationResponse> {

  toEntitiesFromResponse = (response: ReservationResponse): Reservation[] =>
    response.reservations.map((resource) => this.toEntityFromResource(resource));

  /**
   * Converts a ReservationResource to an entity.
   * @param resource - The resource to convert.
   * @returns The converted Reservation entity.
   */
  toEntityFromResource = (resource: ReservationResource): Reservation =>
    new Reservation({
      id: resource.id,
      sportsCenterId: resource.sportsCenterId,
      activityType:resource.activityType,
      participantName:resource.participantName,
      participants: resource.participants,
      weatherTemperature: resource.weatherTemperature,
      reservedAt: resource.reservedAt,
    });

  /**
   * Converts a SportCenter entity to a resource.
   * @param entity - The entity to convert.
   * @returns The converted SportCenterResource.
   */
  toResourceFromEntity = (entity: Reservation): ReservationResource =>
    ({
      id: entity.id,
      sportsCenterId: entity.sportsCenterId,
      activityType: entity.activityType,
      participantName: entity.participantName,
      participants: entity.participants,
      weatherTemperature: entity.weatherTemperature,
      reservedAt: entity.reservedAt,
    } as ReservationResource);

}
