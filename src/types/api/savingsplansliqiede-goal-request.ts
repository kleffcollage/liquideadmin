/* tslint:disable */
import { LiquiedeGoalInput } from './liquiede-goal-input';

export type SavingsplansliqiedeGoalRequest<
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
  ? LiquiedeGoalInput
  : TCode extends 'application/json'
  ? LiquiedeGoalInput
  : TCode extends 'text/json'
  ? LiquiedeGoalInput
  : TCode extends 'application/*+json'
  ? LiquiedeGoalInput
  : any;
