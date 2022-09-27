/* tslint:disable */
import { AirtimePurchaseView } from './airtime-purchase-view';

export interface AirtimePurchaseViewStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: AirtimePurchaseView;
  statusCode?: null | string;
  errors?: any;
}
