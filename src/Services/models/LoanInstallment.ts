/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Loan } from "./Loan";
import type { Status } from "types/api/status";

export type LoanInstallment = {
  id?: number;
  dateCreated?: string;
  dateModified?: string;
  loanId?: number;
  loan?: Loan;
  installmentNumber?: number;
  amount?: number;
  dueDate?: string;
  datePaid?: string | null;
  amountPaid?: number | null;
  statusId?: number;
  status?: Status;
};
