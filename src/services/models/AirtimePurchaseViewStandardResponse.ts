/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AirtimePurchaseView } from './AirtimePurchaseView';

export type AirtimePurchaseViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: AirtimePurchaseView;
    statusCode?: string | null;
    errors?: any;
};
