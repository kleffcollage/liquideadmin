/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LoanInstallment } from './LoanInstallment';
import type { UserView } from './UserView';

export type LoanView = {
    id?: number;
    userId?: number;
    user?: UserView;
    amount?: string | null;
    loanTermInMonth?: number;
    loanTypeId?: number;
    loanType?: string | null;
    companyName?: string | null;
    reason?: string | null;
    documentReference?: string | null;
    status?: string | null;
    dateCreated?: string;
    installments?: Array<LoanInstallment> | null;
};
