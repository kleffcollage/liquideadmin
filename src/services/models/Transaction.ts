/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Loan } from "./Loan";
import type { LoanInstallment } from "./LoanInstallment";
import type { PaymentLog } from "./PaymentLog";
import type { SavingPlans } from "./SavingPlans";
import type { Status } from "types/api/status";
import type { User } from "types/api/user";

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
  loanId?: number | null;
  loan?: Loan;
  loanInstallmentId?: number | null;
  loanInstallment?: LoanInstallment;
};
