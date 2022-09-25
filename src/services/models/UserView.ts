/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserMetricsView } from './UserMetricsView';

export type UserView = {
    id?: number;
    email?: string | null;
    fullName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    token?: string | null;
    phoneNumber?: string | null;
    metrics?: UserMetricsView;
};
