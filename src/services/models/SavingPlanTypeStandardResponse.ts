/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SavingPlanType } from './SavingPlanType';

export type SavingPlanTypeStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: SavingPlanType;
    statusCode?: string | null;
    errors?: any;
};
