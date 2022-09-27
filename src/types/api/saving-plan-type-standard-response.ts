/* tslint:disable */
import { SavingPlanType } from './saving-plan-type';

export interface SavingPlanTypeStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: SavingPlanType;
  statusCode?: null | string;
  errors?: any;
}
