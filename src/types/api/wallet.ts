/* tslint:disable */
import { Status } from './status';
import { User } from './user';

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
