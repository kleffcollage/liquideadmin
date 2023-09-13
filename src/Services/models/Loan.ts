/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { Status } from "types/api/status";
import type { LoanInstallment } from "./LoanInstallment";
import type { LoanType } from "./LoanType";
import { User } from "types/api/user";
// import type { Status } from 'types/api/status';
// import type { User } from "./User";

export type Loan = {
  id?: number;
  dateCreated?: string;
  dateModified?: string;
  userId?: number;
  user?: User;
  amount?: string | null;
  loanTermInMonth?: number;
  loanTypeId?: number;
  loanType?: LoanType;
  companyName?: string | null;
  reason?: string | null;
  documentReference?: string | null;
  interestRate?: number;
  monthlyRepayment?: number;
  statusId?: number;
  status?: Status;
  installments?: Array<LoanInstallment> | null;
};
