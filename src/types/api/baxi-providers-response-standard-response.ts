/* tslint:disable */
import { BaxiProvidersResponse } from './baxi-providers-response';

export interface BaxiProvidersResponseStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: BaxiProvidersResponse;
  statusCode?: null | string;
  errors?: any;
}
