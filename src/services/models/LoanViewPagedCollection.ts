/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

// import type { Link } from 'types/api/link';
import { Link } from "types/api/link";
import type { LoanView } from "./LoanView";

export type LoanViewPagedCollection = {
  offset?: number | null;
  limit?: number | null;
  size?: number;
  first?: Link;
  previous?: Link;
  next?: Link;
  last?: Link;
  self?: Link;
  value?: Array<LoanView> | null;
};
