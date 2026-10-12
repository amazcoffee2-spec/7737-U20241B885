import { BaseApiEndpoint } from '../../shared/infrastructure/base-api-endpoint';
import { SportCenter } from '../domain/model/sport-center.entity';
import { SportCenterResponse, SportCenterResource } from './sport-center.response';
import { SportCenterAssembler } from './sport-center.assembler';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';


export class SportCenterEndpoint extends BaseApiEndpoint<SportCenter, SportCenterResource, SportCenterResponse, SportCenterAssembler> {

  constructor(http: HttpClient) {
    super(
      http,
      `${environment.platformProviderApiBaseUrl}${environment.platformProviderSportsCentersEndpointPath}`,
      new SportCenterAssembler(),
    );
  }
}
