import {Component, computed, input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { matIconModule } from '@angular/material/icon';
import {SportCenter} from '../../../domain/model/sport-center.entity';
import {Reservation} from '../../../domain/model/reservation.entity';

@Component({
  selector: 'app-new-reservation',
  standalone:true,
  imports: [MatCardModule, MatProgressSpinnerModule, MatTableModule],
  templateUrl: 'new-reservation.html',
  styleUrls: ['./new-reservation.css']
})
