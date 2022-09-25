/* tslint:disable */
import { ProviderBouquetResponseListStandardResponse } from './provider-bouquet-response-list-standard-response';

export type BillsmultichoiceproviderBouquetsServiceTypeResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? ProviderBouquetResponseListStandardResponse
    : TContentType extends 'application/json'
    ? ProviderBouquetResponseListStandardResponse
    : TContentType extends 'text/json'
    ? ProviderBouquetResponseListStandardResponse
    : any
  : any;
