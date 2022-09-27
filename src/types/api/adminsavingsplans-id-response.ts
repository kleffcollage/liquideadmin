/* tslint:disable */
import { SavingPlanTypeViewStandardResponse } from './saving-plan-type-view-standard-response';

export type AdminsavingsplansIdResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? SavingPlanTypeViewStandardResponse
    : TContentType extends 'application/json'
    ? SavingPlanTypeViewStandardResponse
    : TContentType extends 'text/json'
    ? SavingPlanTypeViewStandardResponse
    : any
  : any;
