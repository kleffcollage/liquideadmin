/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Card } from './Card';
import type { Code } from './Code';
import type { SavingPlans } from './SavingPlans';
import type { Transaction } from './Transaction';
import type { Wallet } from './Wallet';

export type User = {
    id?: number;
    userName?: string | null;
    normalizedUserName?: string | null;
    email?: string | null;
    normalizedEmail?: string | null;
    emailConfirmed?: boolean;
    passwordHash?: string | null;
    securityStamp?: string | null;
    concurrencyStamp?: string | null;
    phoneNumber?: string | null;
    phoneNumberConfirmed?: boolean;
    twoFactorEnabled?: boolean;
    lockoutEnd?: string | null;
    lockoutEnabled?: boolean;
    accessFailedCount?: number;
    firstName: string;
    lastName: string;
    password: string;
    token?: string | null;
    dateCreated?: string;
    dateModified?: string;
    codes?: Array<Code> | null;
    middleName?: string | null;
    address?: string | null;
    isAdmin?: boolean;
    cards?: Array<Card> | null;
    transactions?: Array<Transaction> | null;
    wallet?: Wallet;
    savings?: Array<SavingPlans> | null;
};
