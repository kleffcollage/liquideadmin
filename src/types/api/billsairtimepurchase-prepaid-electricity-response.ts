/* tslint:disable */
import { AirtimePurchaseViewStandardResponse } from './airtime-purchase-view-standard-response';

export type BillsairtimepurchasePrepaidElectricityResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? AirtimePurchaseViewStandardResponse
    : TContentType extends 'application/json'
    ? AirtimePurchaseViewStandardResponse
    : TContentType extends 'text/json'
    ? AirtimePurchaseViewStandardResponse
    : any
  : any;
