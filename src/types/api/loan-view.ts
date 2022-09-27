/* tslint:disable */
import { UserView } from './user-view';

export interface LoanView {
  userId?: number;
  user?: UserView;
  amount?: null | string;
  loanTermInMonth?: number;
  loanTypeId?: number;
  loanType?: null | string;
  companyName?: null | string;
  reason?: null | string;
  documentReference?: null | string;
  status?: null | string;
}
