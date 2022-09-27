/* tslint:disable */
import { SubscriptionModel } from './subscription-model';

export type BillsmultichoicerenewSubscriptionRequest<
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
  ? SubscriptionModel
  : TCode extends 'application/json'
  ? SubscriptionModel
  : TCode extends 'text/json'
  ? SubscriptionModel
  : TCode extends 'application/*+json'
  ? SubscriptionModel
  : any;
