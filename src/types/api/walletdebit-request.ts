/* tslint:disable */
import { DebitWalletModel } from './debit-wallet-model';

export type WalletdebitRequest<
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
  ? DebitWalletModel
  : TCode extends 'application/json'
  ? DebitWalletModel
  : TCode extends 'text/json'
  ? DebitWalletModel
  : TCode extends 'application/*+json'
  ? DebitWalletModel
  : any;
