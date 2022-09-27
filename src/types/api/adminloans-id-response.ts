/* tslint:disable */
import { LoanViewStandardResponse } from './loan-view-standard-response';

export type AdminloansIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? LoanViewStandardResponse
    : TContentType extends 'application/json'
    ? LoanViewStandardResponse
    : TContentType extends 'text/json'
    ? LoanViewStandardResponse
    : any
  : any;
