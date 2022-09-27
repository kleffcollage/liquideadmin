/* tslint:disable */
import { ProviderBundleResponseListStandardResponse } from './provider-bundle-response-list-standard-response';

export type BillsairtimedataBundlesServiceTypeAccountNumberResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? ProviderBundleResponseListStandardResponse
    : TContentType extends 'application/json'
    ? ProviderBundleResponseListStandardResponse
    : TContentType extends 'text/json'
    ? ProviderBundleResponseListStandardResponse
    : any
  : any;
