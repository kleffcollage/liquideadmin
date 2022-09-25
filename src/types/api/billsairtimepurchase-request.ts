/* tslint:disable */
import { AirtimePurchaseInput } from './airtime-purchase-input';

export type BillsairtimepurchaseRequest<
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
  ? AirtimePurchaseInput
  : TCode extends 'application/json'
  ? AirtimePurchaseInput
  : TCode extends 'text/json'
  ? AirtimePurchaseInput
  : TCode extends 'application/*+json'
  ? AirtimePurchaseInput
  : any;
