import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { Reservation } from '../domain/model/reservation.entity';
import { ReservationResponse, ReservationResource } from './reservation.response';
import { ReservationAssembler } from './reservation.assembler';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';


export class ReservationApiEndpoint extends BaseApiEndpoint<Reservation, ReservationResource, ReservationResponse, ReservationAssembler> {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderReservationsEndpointPath}`,
      new ReservationAssembler(),
    );
  }
}
