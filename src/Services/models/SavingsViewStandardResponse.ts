/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SavingsView } from './SavingsView';

export type SavingsViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: SavingsView;
    statusCode?: string | null;
    errors?: any;
};
