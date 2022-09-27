/* tslint:disable */
import { SavingPlanTypeViewListStandardResponse } from './saving-plan-type-view-list-standard-response';

export type AdminsavingsplansResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? SavingPlanTypeViewListStandardResponse
    : TContentType extends 'application/json'
    ? SavingPlanTypeViewListStandardResponse
    : TContentType extends 'text/json'
    ? SavingPlanTypeViewListStandardResponse
    : any
  : any;
