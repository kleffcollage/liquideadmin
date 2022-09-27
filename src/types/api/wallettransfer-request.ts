/* tslint:disable */
import { WalletTransferModel } from './wallet-transfer-model';

export type WallettransferRequest<
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
  ? WalletTransferModel
  : TCode extends 'application/json'
  ? WalletTransferModel
  : TCode extends 'text/json'
  ? WalletTransferModel
  : TCode extends 'application/*+json'
  ? WalletTransferModel
  : any;
