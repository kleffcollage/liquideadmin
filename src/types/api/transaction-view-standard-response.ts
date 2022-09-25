/* tslint:disable */
import { TransactionView } from './transaction-view';

export interface TransactionViewStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: TransactionView;
  statusCode?: null | string;
  errors?: any;
}
