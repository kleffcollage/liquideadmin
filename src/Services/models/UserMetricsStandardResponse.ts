/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserMetrics } from './UserMetrics';

export type UserMetricsStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: UserMetrics;
    statusCode?: string | null;
    errors?: any;
};
