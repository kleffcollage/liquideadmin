/* tslint:disable */
import { TransactionViewPagedCollectionStandardResponse } from './transaction-view-paged-collection-standard-response';

export type WallettransactionUserIdListResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? TransactionViewPagedCollectionStandardResponse
    : TContentType extends 'application/json'
    ? TransactionViewPagedCollectionStandardResponse
    : TContentType extends 'text/json'
    ? TransactionViewPagedCollectionStandardResponse
    : any
  : any;
