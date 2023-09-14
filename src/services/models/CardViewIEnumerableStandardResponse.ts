/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardView } from './CardView';

export type CardViewIEnumerableStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: Array<CardView> | null;
    statusCode?: string | null;
    errors?: any;
};
