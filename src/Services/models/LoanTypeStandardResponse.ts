/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoanType } from './LoanType';

export type LoanTypeStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: LoanType;
    statusCode?: string | null;
    errors?: any;
};
