/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Transaction } from './Transaction';
import type { Wallet } from './Wallet';

export type PaymentView = {
    status?: string | null;
    wallet?: Wallet;
    transaction?: Transaction;
};

