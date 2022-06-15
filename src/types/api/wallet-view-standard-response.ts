/* tslint:disable */
import { WalletView } from './wallet-view';

export interface WalletViewStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: WalletView;
  statusCode?: null | string;
  errors?: any;
}
