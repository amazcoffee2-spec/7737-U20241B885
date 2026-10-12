
import { inject, Service, signal } from '@angular/core';
import { WeatherService } from '../infrastructure/weather.service';
import { Weather } from '../domain/model/weather.entity';


@Service()
export class WeatherStore {
  private readonly weatherService = inject(WeatherService);


  readonly weather = signal<Weather[]>([]);

  /**
   * @summary Stores weather data.
   */
  readonly weathers = signal<Weather[]>([]);

  /**
   * @summary Indicates  data is loading.
   */
  readonly loading = signal<boolean>(false);

  /**
   * @summary Stores an error message.
   */
  readonly error = signal<string | null>(null);


  /**
   * @summary Loads weather data.
   */
  loadWeathers(): void {
    this.loading.set(true);
    this.error.set(null);

    this.weatherService.getWeather().subscribe({
      next: (weathers) => {
        this.weathers.set(weathers);
        this.loading.set(false);
      },
      error: () => {
        this.error.set('Error loading weather data');
        this.loading.set(false);
      },
    });
  }

}
