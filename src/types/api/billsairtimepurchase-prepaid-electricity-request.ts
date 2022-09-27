/* tslint:disable */
import { PurchaseElectricityModel } from './purchase-electricity-model';

export type BillsairtimepurchasePrepaidElectricityRequest<
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
  ? PurchaseElectricityModel
  : TCode extends 'application/json'
  ? PurchaseElectricityModel
  : TCode extends 'text/json'
  ? PurchaseElectricityModel
  : TCode extends 'application/*+json'
  ? PurchaseElectricityModel
  : any;
