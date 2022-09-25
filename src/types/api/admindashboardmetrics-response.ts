/* tslint:disable */
import { UserMetricsStandardResponse } from './user-metrics-standard-response';

export type AdmindashboardmetricsResponse<
  TCode extends 200 = 200,
  TContentType extends 'text/plain' | 'application/json' | 'text/json' =
    | 'text/plain'
    | 'application/json'
    | 'text/json'
> = TCode extends 200
  ? TContentType extends 'text/plain'
    ? UserMetricsStandardResponse
    : TContentType extends 'application/json'
    ? UserMetricsStandardResponse
    : TContentType extends 'text/json'
    ? UserMetricsStandardResponse
    : any
  : any;
