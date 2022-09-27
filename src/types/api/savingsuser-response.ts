/* tslint:disable */
import { SavingsViewIEnumerableStandardResponse } from './savings-view-i-enumerable-standard-response';

export type SavingsuserResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? SavingsViewIEnumerableStandardResponse
    : TContentType extends 'application/json'
    ? SavingsViewIEnumerableStandardResponse
    : TContentType extends 'text/json'
    ? SavingsViewIEnumerableStandardResponse
    : any
  : any;
