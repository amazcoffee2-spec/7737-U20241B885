import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

/**
 * Resource representation of a sport center.
 */
export interface ReservationResource extends BaseResource {
  /**
   * The unique identifier for the water quality record.
   */
  id: number;

  /**
   * The name of the sport center.
   */
  sportsCenterId: string;

  /**
   * The type of activity offered by the sport center.
   */
  activityType: string;

  /**
   * The participantName the soport center
   */
  participantName: string;

  /**
   * The list of participants for the reservation.
   */
  participants: string;

  /**
   * The weather temperature at the time of the reservation.
   */
  weatherTemperature: string;

  /**
   * The date and time when the reservation was made.
   */
  reservedAt:string
}

/**
 * Response envelope for reservation queries.
 */
export interface ReservationResponse extends BaseResponse {
  /**
   * The list of reservations returned by the API.
   */
  reservations: ReservationResource[];
}
