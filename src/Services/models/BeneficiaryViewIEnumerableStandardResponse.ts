/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BeneficiaryView } from './BeneficiaryView';

export type BeneficiaryViewIEnumerableStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<BeneficiaryView> | null;
    statusCode?: string | null;
    errors?: any;
};
