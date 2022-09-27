/* tslint:disable */
import { MultichoiceAccountResponseStandardResponse } from './multichoice-account-response-standard-response';

export type BillsmultichoicemultichoiceAccountServiceTypeAccountNumberResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? MultichoiceAccountResponseStandardResponse
    : TContentType extends 'application/json'
    ? MultichoiceAccountResponseStandardResponse
    : TContentType extends 'text/json'
    ? MultichoiceAccountResponseStandardResponse
    : any
  : any;
