/* tslint:disable */
import { DataProviderResponseStandardResponse } from './data-provider-response-standard-response';

export type BillsairtimedataProvidersResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? DataProviderResponseStandardResponse
    : TContentType extends 'application/json'
    ? DataProviderResponseStandardResponse
    : TContentType extends 'text/json'
    ? DataProviderResponseStandardResponse
    : any
  : any;
