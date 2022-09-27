/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MultichoiceAccountResponse } from './MultichoiceAccountResponse';

export type MultichoiceAccountResponseStandardResponse = {
    href?: string | null;
    relations?: Array<string> | null;
    method?: string | null;
    routeName?: string | null;
    routeValues?: any;
    status?: boolean;
    message?: string | null;
    data?: MultichoiceAccountResponse;
    statusCode?: string | null;
    errors?: any;
};
