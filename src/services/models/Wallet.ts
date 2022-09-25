/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Status } from './Status';
import type { User } from './User';

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
};
