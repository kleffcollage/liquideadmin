/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { UserView } from "Services";



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
};
