/* tslint:disable */
import { Transaction } from './transaction';
import { Wallet } from './wallet';

export interface PaymentView {
  status?: null | string;
  wallet?: Wallet;
  transaction?: Transaction;
  message?: null | string;
}
