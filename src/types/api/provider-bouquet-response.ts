/* tslint:disable */
import { AvailablePricingOptionResponse } from './available-pricing-option-response';

export interface ProviderBouquetResponse {
  availablePricingOptions?: null | Array<AvailablePricingOptionResponse>;
  code?: null | string;
  name?: null | string;
  description?: null | string;
}
