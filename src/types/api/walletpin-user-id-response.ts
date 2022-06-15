/* tslint:disable */
import { Int32StandardResponse } from './int-32-standard-response';

export type WalletpinUserIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? Int32StandardResponse
    : TContentType extends 'application/json'
    ? Int32StandardResponse
    : TContentType extends 'text/json'
    ? Int32StandardResponse
    : any
  : any;
