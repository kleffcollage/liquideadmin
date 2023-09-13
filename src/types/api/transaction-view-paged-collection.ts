/* tslint:disable */
import { Link } from "types/api/link";
import { TransactionView } from "./transaction-view";

export interface TransactionViewPagedCollection {
  offset?: null | number;
  limit?: null | number;
  size?: number;
  first?: Link;
  previous?: Link;
  next?: Link;
  last?: Link;
  self?: Link;
  value?: null | Array<TransactionView>;
}
