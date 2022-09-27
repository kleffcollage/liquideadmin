/* tslint:disable */
import { MultichoiceAccountResponse } from './multichoice-account-response';

export interface MultichoiceAccountResponseStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: MultichoiceAccountResponse;
  statusCode?: null | string;
  errors?: any;
}
