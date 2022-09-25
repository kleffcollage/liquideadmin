/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoanViewPagedCollection } from './LoanViewPagedCollection';

export type LoanViewPagedCollectionStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: LoanViewPagedCollection;
    statusCode?: string | null;
    errors?: any;
};
