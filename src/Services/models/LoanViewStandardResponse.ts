/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoanView } from './LoanView';

export type LoanViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: LoanView;
    statusCode?: string | null;
    errors?: any;
};
