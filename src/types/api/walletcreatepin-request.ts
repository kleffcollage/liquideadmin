/* tslint:disable */
import { WalletPinModel } from './wallet-pin-model';

export type WalletcreatepinRequest<
  TCode extends
    | 'application/json-patch+json'
    | 'application/json'
    | 'text/json'
    | 'application/*+json' =
    | 'application/json-patch+json'
    | 'application/json'
    | 'text/json'
    | 'application/*+json'
> = TCode extends 'application/json-patch+json'
  ? WalletPinModel
  : TCode extends 'application/json'
  ? WalletPinModel
  : TCode extends 'text/json'
  ? WalletPinModel
  : TCode extends 'application/*+json'
  ? WalletPinModel
  : any;
