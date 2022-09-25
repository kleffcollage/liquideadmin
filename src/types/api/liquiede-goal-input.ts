/* tslint:disable */
export interface LiquiedeGoalInput {
  name?: null | string;
  description?: null | string;
  savingPlanTypeId?: number;
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
  cardId?: number;
  paid?: boolean;
}
