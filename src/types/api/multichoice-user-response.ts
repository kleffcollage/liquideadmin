/* tslint:disable */
import { CurrentBouquetRawResponse } from './current-bouquet-raw-response';
import { RawOutputResponse } from './raw-output-response';

export interface MultichoiceUserResponse {
  name?: null | string;
  address?: null | string;
  outstandingBalance?: any;
  dueDate?: any;
  district?: null | string;
  accountNumber?: null | string;
  minimumAmount?: null | string;
  rawOutput?: RawOutputResponse;
  errorMessage?: null | string;
  currentBouquetRaw?: CurrentBouquetRawResponse;
  currentBouquet?: null | string;
}
