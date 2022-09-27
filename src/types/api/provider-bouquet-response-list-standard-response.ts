/* tslint:disable */
import { ProviderBouquetResponse } from './provider-bouquet-response';

export interface ProviderBouquetResponseListStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: null | Array<ProviderBouquetResponse>;
  statusCode?: null | string;
  errors?: any;
}
