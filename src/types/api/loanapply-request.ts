/* tslint:disable */
import { LoanModel } from './loan-model';

export type LoanapplyRequest<
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
  ? LoanModel
  : TCode extends 'application/json'
  ? LoanModel
  : TCode extends 'text/json'
  ? LoanModel
  : TCode extends 'application/*+json'
  ? LoanModel
  : any;
