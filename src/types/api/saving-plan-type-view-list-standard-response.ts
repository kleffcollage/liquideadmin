/* tslint:disable */
import { SavingPlanTypeView } from './saving-plan-type-view';

export interface SavingPlanTypeViewListStandardResponse {
  href?: null | string;
  relations?: null | Array<string>;
  method?: null | string;
  routeName?: null | string;
  routeValues?: any;
  status?: boolean;
  message?: null | string;
  data?: null | Array<SavingPlanTypeView>;
  statusCode?: null | string;
  errors?: any;
}
