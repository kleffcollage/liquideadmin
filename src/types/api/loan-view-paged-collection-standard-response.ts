/* tslint:disable */
import { LoanViewPagedCollection } from './loan-view-paged-collection';

export interface LoanViewPagedCollectionStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: LoanViewPagedCollection;
  statusCode?: null | string;
  errors?: any;
}
