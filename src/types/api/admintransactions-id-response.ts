/* tslint:disable */
import { TransactionViewStandardResponse } from './transaction-view-standard-response';

export type AdmintransactionsIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? TransactionViewStandardResponse
    : TContentType extends 'application/json'
    ? TransactionViewStandardResponse
    : TContentType extends 'text/json'
    ? TransactionViewStandardResponse
    : any
  : any;
