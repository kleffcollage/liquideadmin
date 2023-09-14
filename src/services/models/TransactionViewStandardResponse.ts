/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { TransactionView } from "types/api/transaction-view";

// import type { TransactionView } from "types/api/transaction-view";

export type TransactionViewStandardResponse = {
  href?: string | null;
  relations?: Array<string> | null;
  method?: string | null;
  routeName?: string | null;
  routeValues?: any;
  status?: boolean;
  message?: string | null;
  data?: TransactionView;
  statusCode?: string | null;
  errors?: any;
};
