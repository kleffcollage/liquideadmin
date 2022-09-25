/* tslint:disable */
import { BaxiProvidersResponseStandardResponse } from './baxi-providers-response-standard-response';

export type BillsairtimeprovidersResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? BaxiProvidersResponseStandardResponse
    : TContentType extends 'application/json'
    ? BaxiProvidersResponseStandardResponse
    : TContentType extends 'text/json'
    ? BaxiProvidersResponseStandardResponse
    : any
  : any;
