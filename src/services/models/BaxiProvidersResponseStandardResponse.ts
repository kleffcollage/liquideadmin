/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BaxiProvidersResponse } from './BaxiProvidersResponse';

export type BaxiProvidersResponseStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: BaxiProvidersResponse;
    statusCode?: string | null;
    errors?: any;
};
