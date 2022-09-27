/* tslint:disable */
import { CardViewIEnumerableStandardResponse } from './card-view-i-enumerable-standard-response';

export type WalletcardslistResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? CardViewIEnumerableStandardResponse
    : TContentType extends 'application/json'
    ? CardViewIEnumerableStandardResponse
    : TContentType extends 'text/json'
    ? CardViewIEnumerableStandardResponse
    : any
  : any;
