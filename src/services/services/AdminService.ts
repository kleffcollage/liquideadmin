/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginModel } from '../models/LoginModel';
import type { Register } from '../models/Register';
import type { UserViewPagedCollectionStandardResponse } from '../models/UserViewPagedCollectionStandardResponse';
import type { UserViewStandardResponse } from '../models/UserViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AdminService {

    /**
     * @param requestBody
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static authenticate(
        requestBody?: LoginModel,
    ): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Admin/token',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param requestBody
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static create(
        requestBody?: Register,
    ): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Admin/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param offset
     * @param limit
     * @param search
     * @returns UserViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static listAdmins(
        offset?: number | null,
        limit?: number | null,
        search?: string | null,
    ): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/list',
            query: {
                'Offset': offset,
                'Limit': limit,
                'search': search,
            },
        });
    }

    /**
     * @param email
     * @returns UserViewStandardResponse Success
     * @throws ApiError
     */
    public static deleteUser(
        email: string | null,
    ): CancelablePromise<UserViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/delete/{email}',
            path: {
                'email': email,
            },
        });
    }

    /**
     * @param id
     * @returns UserViewPagedCollectionStandardResponse Success
     * @throws ApiError
     */
    public static getUserById(
        id: number,
    ): CancelablePromise<UserViewPagedCollectionStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Admin/user/get/{id}',
            path: {
                'id': id,
            },
        });
    }

}
