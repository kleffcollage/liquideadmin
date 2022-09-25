/* tslint:disable */
import { FundWalletModel } from './fund-wallet-model';

export type WalletfundRequest<
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
  ? FundWalletModel
  : TCode extends 'application/json'
  ? FundWalletModel
  : TCode extends 'text/json'
  ? FundWalletModel
  : TCode extends 'application/*+json'
  ? FundWalletModel
  : any;
