/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { WalletView } from './WalletView';

export type WalletViewStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: WalletView;
    statusCode?: string | null;
    errors?: any;
};
