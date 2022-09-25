/* tslint:disable */
import { LoanViewPagedCollectionStandardResponse } from './loan-view-paged-collection-standard-response';

export type AdminloansrejectedResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? LoanViewPagedCollectionStandardResponse
    : TContentType extends 'application/json'
    ? LoanViewPagedCollectionStandardResponse
    : TContentType extends 'text/json'
    ? LoanViewPagedCollectionStandardResponse
    : any
  : any;
