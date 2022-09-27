/* tslint:disable */
import { LoanView } from './loan-view';

export interface LoanViewIEnumerableStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: null | Array<LoanView>;
  statusCode?: null | string;
  errors?: any;
}
