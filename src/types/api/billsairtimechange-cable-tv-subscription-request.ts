/* tslint:disable */
import { CableSubscriptionModel } from './cable-subscription-model';

export type BillsairtimechangeCableTvSubscriptionRequest<
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
  ? CableSubscriptionModel
  : TCode extends 'application/json'
  ? CableSubscriptionModel
  : TCode extends 'text/json'
  ? CableSubscriptionModel
  : TCode extends 'application/*+json'
  ? CableSubscriptionModel
  : any;
