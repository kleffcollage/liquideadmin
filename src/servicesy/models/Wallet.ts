/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status } from "types/api/status";
import type { User } from "types/api/user";

export type Wallet = {
  id?: number;
  dateCreated?: string;
  dateModified?: string;
  zebrraId?: string | null;
  userId?: number;
  user?: User;
  balance?: string | null;
  transferBalanceWitheld?: string | null;
  currency?: string | null;
  walletTypeId?: number;
  statusId?: number;
  pin?: number;
  status?: Status;
  transactionLimit?: number;
  dailyTransactionLimit?: number;
};
