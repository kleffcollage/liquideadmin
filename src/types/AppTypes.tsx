import { Link } from "./api";
export type LoginModel = {
	email: string;
	password: string;
}

export const UserTypes = {
	ADMIN_USER: "ADMIN_USER",
	SERVICE_USER: "SERVICE_USER",
	INTEGRATOR_ADMIN_USER: "INTEGRATOR_ADMIN_USER",
};

export interface PagedCollection {
	offset?: null | number;
	limit?: null | number;
	size?: number;
	first?: Link;
	previous?: Link;
	next?: Link;
	last?: Link;
	self?: Link;
	value?: null | Array<any>;
}
export type ContactData = {
	name: string;
	email: string;
	message: string;
	phone: string;
	company: string;
};
