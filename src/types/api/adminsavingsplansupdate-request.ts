/* tslint:disable */
import { SavingPlanType } from './saving-plan-type';

export type AdminsavingsplansupdateRequest<
  TCode extends
    | 'application/json-patch+json'
    | 'application/json'
    | 'text/json'
    | 'application/*+json' =
    | 'application/json-patch+json'
    | 'application/json'
    | 'text/json'
    | 'application/*+json'
> = TCode extends 'application/json-patch+json'
  ? SavingPlanType
  : TCode extends 'application/json'
  ? SavingPlanType
  : TCode extends 'text/json'
  ? SavingPlanType
  : TCode extends 'application/*+json'
  ? SavingPlanType
  : any;
