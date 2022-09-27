/* tslint:disable */
import { DataProviderResponse } from './data-provider-response';

export interface DataProviderResponseStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: DataProviderResponse;
  statusCode?: null | string;
  errors?: any;
}
