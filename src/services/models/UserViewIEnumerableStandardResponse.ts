/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserView } from "types/api/user-view";

export type UserViewIEnumerableStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: Array<UserView> | null;
  statusCode?: string | null;
  errors?: any;
};
