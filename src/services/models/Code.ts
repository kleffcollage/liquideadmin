/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { User } from "types/api/user";

export type Code = {
  id?: number;
  dateCreated?: string;
  dateModified?: string;
  codeString: string;
  key?: string | null;
  userId?: number | null;
  user?: User;
  expiryDate?: string;
  isExpired?: boolean;
  token?: string | null;
};
