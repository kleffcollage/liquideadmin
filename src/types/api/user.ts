/* tslint:disable */
import { Card } from './card';
import { Code } from './code';
import { Transaction } from './transaction';
import { Wallet } from './wallet';

export interface User {
  id?: number;
  userName?: null | string;
  normalizedUserName?: null | string;
  email?: null | string;
  normalizedEmail?: null | string;
  emailConfirmed?: boolean;
  passwordHash?: null | string;
  securityStamp?: null | string;
  concurrencyStamp?: null | string;
  phoneNumber?: null | string;
  phoneNumberConfirmed?: boolean;
  twoFactorEnabled?: boolean;
  lockoutEnd?: null | string;
  lockoutEnabled?: boolean;
  accessFailedCount?: number;
  firstName: string;
  lastName: string;
  password: string;
  token?: null | string;
  dateCreated?: string;
  dateModified?: string;
  codes?: null | Array<Code>;
  middleName?: null | string;
  address?: null | string;
  isAdmin?: boolean;
  cards?: null | Array<Card>;
  transactions?: null | Array<Transaction>;
  wallet?: Wallet;
}
