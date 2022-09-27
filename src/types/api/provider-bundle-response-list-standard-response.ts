/* tslint:disable */
import { ProviderBundleResponse } from './provider-bundle-response';

export interface ProviderBundleResponseListStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: null | Array<ProviderBundleResponse>;
  statusCode?: null | string;
  errors?: any;
}
