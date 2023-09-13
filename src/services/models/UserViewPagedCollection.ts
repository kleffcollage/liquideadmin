/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Link } from "./Link";
import type { UserView } from "types/api/user-view";

export type UserViewPagedCollection = {
  offset?: number | null;
  limit?: number | null;
  size?: number;
  first?: Link;
  previous?: Link;
  next?: Link;
  last?: Link;
  self?: Link;
  value?: Array<UserView> | null;
};
