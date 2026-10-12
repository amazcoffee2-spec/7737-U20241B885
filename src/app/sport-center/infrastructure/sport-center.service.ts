import { inject, Service } from '@angular/core';
import { BaseApi } from '../../shared/infrastructure/base-api';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SportCenter } from '../domain/model/sport-center.entity';
import { Reservation } from '../domain/model/reservation.entity';

import { SportCenterEndpoint } from './sport-center-endpoint';
import { ReservationApiEndpoint } from './reservation-api-endpoint';


@Service()
export class SportCenterService extends BaseApi {
  private readonly http = inject(HttpClient);

  private readonly sportCenterEndPoint = new SportCenterEndpoint(this.http);

  private readonly reservationEndPoint = new ReservationApiEndpoint(this.http);


  getSportCenters = (): Observable<SportCenter[]> => this.sportCenterEndPoint.getAll();


  getSportCenter = (id: number): Observable<SportCenter> =>
    this.sportCenterEndPoint.getById(id);

  /**
   * Creates a new sport center.
   * @param sportCenter - The sport center to create.
   * @returns An Observable containing the created sport center.
   */
  createSportCenter = (sportCenter: SportCenter): Observable<SportCenter> =>
    this.sportCenterEndPoint.create(sportCenter);

    getReservations = (): Observable<Reservation[]> =>
    this.reservationEndPoint.getAll();

  /**
   * Retrieves a reservation by ID.
   * @param id - The ID of the reservation.
   * @returns An Observable containing the reservation.
   */
  getReservationsById = (id: number): Observable<Reservation> =>
    this.reservationEndPoint.getById(id);
}
