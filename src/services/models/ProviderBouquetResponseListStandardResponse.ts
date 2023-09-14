/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ProviderBouquetResponse } from './ProviderBouquetResponse';

export type ProviderBouquetResponseListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<ProviderBouquetResponse> | null;
    statusCode?: string | null;
    errors?: any;
};
