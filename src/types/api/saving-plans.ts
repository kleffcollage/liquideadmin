/* tslint:disable */
import { Card } from "types/api/card";
import { SavingPlanType } from "./saving-plan-type";
import { Status } from "types/api/status";
import { User } from "./user";

export interface SavingPlans {
  id?: number;
  dateCreated?: string;
  dateModified?: string;
  name?: null | string;
  description?: null | string;
  savingPlanTypeId?: number;
  savingPlanType?: SavingPlanType;
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
  userId?: number;
  user?: User;
  statusId?: number;
  status?: Status;
  cardId?: number;
  card?: Card;
  paid?: null | string;
}
