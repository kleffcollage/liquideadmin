/* tslint:disable */
import { LoanView } from './loan-view';

export interface LoanViewStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: LoanView;
  statusCode?: null | string;
  errors?: any;
}
