/* tslint:disable */
import { LiquedeSealInput } from './liquede-seal-input';

export type SavingsplansliqiedeSealRequest<
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
  ? LiquedeSealInput
  : TCode extends 'application/json'
  ? LiquedeSealInput
  : TCode extends 'text/json'
  ? LiquedeSealInput
  : TCode extends 'application/*+json'
  ? LiquedeSealInput
  : any;
