/* tslint:disable */
import { SavingsView } from './savings-view';

export interface SavingsViewStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: SavingsView;
  statusCode?: null | string;
  errors?: any;
}
