/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SavingPlanTypeView } from './SavingPlanTypeView';

export type SavingPlanTypeViewListStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<SavingPlanTypeView> | null;
    statusCode?: string | null;
    errors?: any;
};
