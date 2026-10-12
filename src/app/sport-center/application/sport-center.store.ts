import { inject, Service, signal } from '@angular/core';
import { SportCenterService } from '../infrastructure/sport-center.service';
import { Reservation } from '../domain/model/reservation.entity';
import { SportCenter } from '../domain/model/sport-center.entity';

/**
 * @summary Manages sport centers and reservations.
 */
@Service()
export class SportCenterStore {
  private readonly sportCenterService = inject(SportCenterService);


  readonly sportCenters = signal<SportCenter[]>([]);

  /**
   * @summary Stores reservations.
   */
  readonly reservations = signal<Reservation[]>([]);

  /**
   * @summary Indicates  data is loading.
   */
  readonly loading = signal<boolean>(false);

  /**
   * @summary Stores an error message.
   */
  readonly error = signal<string | null>(null);

  /**
   * @summary Loads reservations.
   */
  loadReservations(): void {
    this.loading.set(true);
    this.error.set(null);

    this.sportCenterService.getSportCenter(1).subscribe({
      next: (reservations) => {
        this.reservations.set(this.reservations());
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error loading reservations');
        this.loading.set(false);
      },
    });
  }


  /**
   * @summary Loads sport centers.
   */
  loadSportCenters(): void {
    this.loading.set(true);
    this.error.set(null);

    this.sportCenterService.getSportCenters().subscribe({
      next: (sportCenters) => {
        this.sportCenters.set(sportCenters);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error loading sport centers');
        this.loading.set(false);
      },
    });
  }

}
