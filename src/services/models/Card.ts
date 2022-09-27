/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from './User';

export type Card = {
    id?: number;
    dateCreated?: string;
    dateModified?: string;
    userId?: number;
    user?: User;
    first6Digits?: string | null;
    last4Digits?: string | null;
    issuer?: string | null;
    country?: string | null;
    type?: string | null;
    token?: string | null;
    expiry?: string | null;
};
