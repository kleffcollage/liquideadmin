/* tslint:disable */
import { User } from "types/api/user";

export interface Card {
  id?: number;
  dateCreated?: string;
  dateModified?: string;
  userId?: number;
  user?: User;
  first6Digits?: null | string;
  last4Digits?: null | string;
  issuer?: null | string;
  country?: null | string;
  type?: null | string;
  token?: null | string;
  expiry?: null | string;
}
