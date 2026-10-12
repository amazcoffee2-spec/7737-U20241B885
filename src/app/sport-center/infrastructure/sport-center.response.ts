import { BaseResource, BaseResponse } from '../../shared/infrastructure/base-response';

/**
 * Resource representation of a sport center.
 */
export interface SportCenterResource extends BaseResource {
  /**
   * The unique identifier for the water quality record.
   */
  id: number;

  /**
   * The name of the sport center.
   */
  name: string;

  /**
   * The type of activity offered by the sport center.
   */
  activityType: string;

  /**
   * The capacity of the sport center.
   */
  capacity: number;

  /**
   * The latitude of the sport center.
   */
  latitude: number;

  /**
   * The longitude of the sport center.
   */
  longitude: number;

}

/**
 * Response envelope for sport center collection queries.
 */
export interface SportCenterResponse extends BaseResponse {
  /**
   * The list of sport centers returned by the API.
   */
  sportCenters: SportCenterResource[];
}
