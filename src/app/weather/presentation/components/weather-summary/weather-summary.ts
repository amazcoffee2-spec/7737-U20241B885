import {Component, input} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-weather-summary',
  standalone:true,
  imports: [MatCardModule, MatProgressSpinnerModule, MatTableModule],
  templateUrl: 'weather-summary.html',
  styleUrls: ['./weather-summary.css']
})
export class WeatherSummaryComponent {
  readonly temperature = input <number | null>(null);
  readonly loading = input<boolean>(false);
  readonly error = input<string | null>(null);
}
