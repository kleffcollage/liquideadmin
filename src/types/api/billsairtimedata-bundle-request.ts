/* tslint:disable */
import { DataBundlePurchaseInput } from './data-bundle-purchase-input';

export type BillsairtimedataBundleRequest<
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
  ? DataBundlePurchaseInput
  : TCode extends 'application/json'
  ? DataBundlePurchaseInput
  : TCode extends 'text/json'
  ? DataBundlePurchaseInput
  : TCode extends 'application/*+json'
  ? DataBundlePurchaseInput
  : any;
