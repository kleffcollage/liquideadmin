/* tslint:disable */
import { UserView } from './user-view';

export interface SavingsView {
  name?: null | string;
  description?: null | string;
  savingPlanType?: null | string;
  durationInDays?: number;
  amount?: number;
  interestRate?: number;
  monthlyPayment?: null | number;
  maturityDate?: string;
  paymentMethod?: null | string;
  targetAmount?: null | number;
  targetDate?: null | number;
  debitFrequencyInDays?: number;
  preferredRecurringPaymentDate?: string;
  startDate?: string;
  user?: UserView;
  status?: null | string;
}
