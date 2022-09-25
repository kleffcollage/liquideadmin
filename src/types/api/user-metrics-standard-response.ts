/* tslint:disable */
import { UserMetrics } from './user-metrics';

export interface UserMetricsStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: UserMetrics;
  statusCode?: null | string;
  errors?: any;
}
