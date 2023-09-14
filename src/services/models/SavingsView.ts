/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserView } from "types/api/user-view";

export type SavingsView = {
  id?: number;
  name?: string | null;
  description?: string | null;
  savingPlanType?: string | null;
  durationInDays?: number;
  amount?: number;
  interestRate?: number;
  monthlyPayment?: number | null;
  maturityDate?: string;
  paymentMethod?: string | null;
  targetAmount?: number | null;
  targetDate?: number | null;
  debitFrequencyInDays?: number;
  preferredRecurringPaymentDate?: string;
  startDate?: string;
  user?: UserView;
  status?: string | null;
};
