/* tslint:disable */
import { SavingPlanTypeView } from './saving-plan-type-view';

export interface SavingPlanTypeViewStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: SavingPlanTypeView;
  statusCode?: null | string;
  errors?: any;
}
