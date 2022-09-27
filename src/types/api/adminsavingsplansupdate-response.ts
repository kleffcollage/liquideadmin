/* tslint:disable */
import { SavingPlanTypeStandardResponse } from './saving-plan-type-standard-response';

export type AdminsavingsplansupdateResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? SavingPlanTypeStandardResponse
    : TContentType extends 'application/json'
    ? SavingPlanTypeStandardResponse
    : TContentType extends 'text/json'
    ? SavingPlanTypeStandardResponse
    : any
  : any;
