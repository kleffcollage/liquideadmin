/* tslint:disable */
import { SavingsViewStandardResponse } from './savings-view-standard-response';

export type SavingsplansliqiedeSealResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? SavingsViewStandardResponse
    : TContentType extends 'application/json'
    ? SavingsViewStandardResponse
    : TContentType extends 'text/json'
    ? SavingsViewStandardResponse
    : any
  : any;
