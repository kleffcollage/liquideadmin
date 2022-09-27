/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoanView } from './LoanView';

export type LoanViewIEnumerableStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<LoanView> | null;
    statusCode?: string | null;
    errors?: any;
};
