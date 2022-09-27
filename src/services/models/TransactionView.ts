/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserView } from './UserView';

export type TransactionView = {
    id?: number;
    userId?: number;
    transactionReference?: string | null;
    paymentLogId?: number | null;
    status?: string | null;
    amount?: string | null;
    description?: string | null;
    title?: string | null;
    dateCreated?: string;
    user?: UserView;
    channel?: string | null;
    provider?: string | null;
};
