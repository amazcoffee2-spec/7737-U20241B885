import {Component, computed, input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { matIconModule } from '@angular/material/icon';
import {SportCenter} from '../../../domain/model/sport-center.entity';
import {Reservation} from '../../../domain/model/reservation.entity';

@Component({
  selector: 'app-new-reservation',
  standalone:true,
  imports: [MatCardModule, matIconModule],
  templateUrl: 'new-reservation.html',
  styleUrls: ['./new-reservation.css']
})

export class NewReservationComponent {
  readonly sportCenter = input<SportCenter | null>(null);
  readonly reservation = input<Reservation | null>(null);

}
