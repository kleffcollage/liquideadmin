/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type LiquiedeGoalInput = {
    name?: string | null;
    description?: string | null;
    savingPlanTypeId?: number;
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
    cardId?: number;
    paid?: boolean;
};
