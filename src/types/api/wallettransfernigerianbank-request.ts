/* tslint:disable */
import { NGNTransferModel } from './ngn-transfer-model';

export type WallettransfernigerianbankRequest<
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
  ? NGNTransferModel
  : TCode extends 'application/json'
  ? NGNTransferModel
  : TCode extends 'text/json'
  ? NGNTransferModel
  : TCode extends 'application/*+json'
  ? NGNTransferModel
  : any;
