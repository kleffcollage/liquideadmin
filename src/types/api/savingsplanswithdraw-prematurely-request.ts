/* tslint:disable */
import { SavingsWithdrawalModel } from './savings-withdrawal-model';

export type SavingsplanswithdrawPrematurelyRequest<
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
  ? SavingsWithdrawalModel
  : TCode extends 'application/json'
  ? SavingsWithdrawalModel
  : TCode extends 'text/json'
  ? SavingsWithdrawalModel
  : TCode extends 'application/*+json'
  ? SavingsWithdrawalModel
  : any;
