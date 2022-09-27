/* tslint:disable */
import { WalletViewStandardResponse } from './wallet-view-standard-response';

export type WalletcreatepinResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? WalletViewStandardResponse
    : TContentType extends 'application/json'
    ? WalletViewStandardResponse
    : TContentType extends 'text/json'
    ? WalletViewStandardResponse
    : any
  : any;
