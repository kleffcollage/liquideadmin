/* tslint:disable */
import { SavingPlanTypeIEnumerableStandardResponse } from './saving-plan-type-i-enumerable-standard-response';

export type SavingsplanstypesResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? SavingPlanTypeIEnumerableStandardResponse
    : TContentType extends 'application/json'
    ? SavingPlanTypeIEnumerableStandardResponse
    : TContentType extends 'text/json'
    ? SavingPlanTypeIEnumerableStandardResponse
    : any
  : any;
