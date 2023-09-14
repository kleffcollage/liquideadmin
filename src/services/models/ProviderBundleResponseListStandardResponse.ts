/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProviderBundleResponse } from './ProviderBundleResponse';

export type ProviderBundleResponseListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<ProviderBundleResponse> | null;
    statusCode?: string | null;
    errors?: any;
};
