/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SavingPlanType } from './SavingPlanType';

export type SavingPlanTypeIEnumerableStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<SavingPlanType> | null;
    statusCode?: string | null;
    errors?: any;
};
