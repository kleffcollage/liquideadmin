/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CurrentBouquetRawResponse } from './CurrentBouquetRawResponse';
import type { RawOutputResponse } from './RawOutputResponse';

export type MultichoiceUserResponse = {
    name?: string | null;
    address?: string | null;
    outstandingBalance?: any;
    dueDate?: any;
    district?: string | null;
    accountNumber?: string | null;
    minimumAmount?: string | null;
    rawOutput?: RawOutputResponse;
    errorMessage?: string | null;
    currentBouquetRaw?: CurrentBouquetRawResponse;
    currentBouquet?: string | null;
};
