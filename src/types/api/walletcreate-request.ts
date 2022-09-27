/* tslint:disable */
import { WalletModel } from './wallet-model';

export type WalletcreateRequest<
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
  ? WalletModel
  : TCode extends 'application/json'
  ? WalletModel
  : TCode extends 'text/json'
  ? WalletModel
  : TCode extends 'application/*+json'
  ? WalletModel
  : any;
