/* tslint:disable */
import { Status } from "types/api/status";
import { User } from "types/api/user";

export interface Wallet {
  id?: number;
  dateCreated?: string;
  dateModified?: string;
  zebrraId?: null | string;
  userId?: number;
  user?: User;
  balance?: null | string;
  transferBalanceWitheld?: null | string;
  currency?: null | string;
  walletTypeId?: number;
  statusId?: number;
  pin?: number;
  status?: Status;
}
