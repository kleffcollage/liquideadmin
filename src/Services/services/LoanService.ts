/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoanModel } from '../models/LoanModel';
import type { LoanViewIEnumerableStandardResponse } from '../models/LoanViewIEnumerableStandardResponse';
import type { LoanViewStandardResponse } from '../models/LoanViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LoanService {

    /**
     * @param requestBody 
     * @returns LoanViewStandardResponse Success
     * @throws ApiError
     */
    public static createLoanRequest(
requestBody?: LoanModel,
): CancelablePromise<LoanViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Loan/apply',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @param id 
     * @returns LoanViewStandardResponse Success
     * @throws ApiError
     */
    public static getLoanRequest(
id: number,
): CancelablePromise<LoanViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Loan/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * @returns LoanViewIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static listMyLoans(): CancelablePromise<LoanViewIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Loan/my',
        });
    }

}
