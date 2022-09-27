/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransactionView } from './TransactionView';

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
