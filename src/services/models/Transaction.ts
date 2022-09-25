/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentLog } from './PaymentLog';
import type { SavingPlans } from './SavingPlans';
import type { Status } from './Status';
import type { User } from './User';

export type Transaction = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    userId?: number;
    user?: User;
    transactionReference?: string | null;
    paymentLogId?: number | null;
    paymentLog?: PaymentLog;
    statusId?: number;
    status?: Status;
    amount?: string | null;
    description?: string | null;
    title?: string | null;
    flutterwaveId?: number;
    savingPlansId?: number | null;
    channel?: string | null;
    provider?: string | null;
    plan?: SavingPlans;
};
