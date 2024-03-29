/* tslint:disable */
import { PaymentLog } from "./payment-log";
import { SavingPlans } from "./saving-plans";
import { Status } from "types/api/status";
import { User } from "types/api/user";

export interface Transaction {
  id?: number;
  dateCreated?: string;
  dateModified?: string;
  userId?: number;
  user?: User;
  transactionReference?: null | string;
  paymentLogId?: null | number;
  paymentLog?: PaymentLog;
  statusId?: number;
  status?: Status;
  amount?: null | string;
  description?: null | string;
  title?: null | string;
  flutterwaveId?: number;
  savingPlansId?: null | number;
  plan?: SavingPlans;
}
