/* tslint:disable */
import { TransactionViewPagedCollection } from './transaction-view-paged-collection';

export interface TransactionViewPagedCollectionStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: TransactionViewPagedCollection;
  statusCode?: null | string;
  errors?: any;
}
