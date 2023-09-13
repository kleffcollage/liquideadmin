/* tslint:disable */
import { Link } from "types/api/link";
import { LoanView } from "./loan-view";

export interface LoanViewPagedCollection {
  offset?: null | number;
  limit?: null | number;
  size?: number;
  first?: Link;
  previous?: Link;
  next?: Link;
  last?: Link;
  self?: Link;
  value?: null | Array<LoanView>;
}
