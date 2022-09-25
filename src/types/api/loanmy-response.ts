/* tslint:disable */
import { LoanViewIEnumerableStandardResponse } from './loan-view-i-enumerable-standard-response';

export type LoanmyResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? LoanViewIEnumerableStandardResponse
    : TContentType extends 'application/json'
    ? LoanViewIEnumerableStandardResponse
    : TContentType extends 'text/json'
    ? LoanViewIEnumerableStandardResponse
    : any
  : any;
