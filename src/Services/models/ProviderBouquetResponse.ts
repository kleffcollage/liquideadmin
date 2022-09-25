/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AvailablePricingOptionResponse } from './AvailablePricingOptionResponse';

export type ProviderBouquetResponse = {
    availablePricingOptions?: Array<AvailablePricingOptionResponse> | null;
    code?: string | null;
    name?: string | null;
    description?: string | null;
};
