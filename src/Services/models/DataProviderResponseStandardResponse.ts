/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DataProviderResponse } from './DataProviderResponse';

export type DataProviderResponseStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: DataProviderResponse;
    statusCode?: string | null;
    errors?: any;
};
