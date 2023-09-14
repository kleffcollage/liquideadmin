/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserView } from "types/api/user-view";

export type UserViewStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: UserView;
  statusCode?: string | null;
  errors?: any;
};
