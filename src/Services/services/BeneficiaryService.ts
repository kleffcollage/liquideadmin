/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BeneficiaryModel } from '../models/BeneficiaryModel';
import type { BeneficiaryViewIEnumerableStandardResponse } from '../models/BeneficiaryViewIEnumerableStandardResponse';
import type { BeneficiaryViewStandardResponse } from '../models/BeneficiaryViewStandardResponse';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BeneficiaryService {

    /**
     * @param requestBody 
     * @returns BeneficiaryViewStandardResponse Success
     * @throws ApiError
     */
    public static createBeneficiary(
requestBody?: BeneficiaryModel,
): CancelablePromise<BeneficiaryViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/Beneficiary/create',
            body: requestBody,
            mediaType: 'application/json-patch+json',
        });
    }

    /**
     * @returns BeneficiaryViewIEnumerableStandardResponse Success
     * @throws ApiError
     */
    public static getBeneficiaries(): CancelablePromise<BeneficiaryViewIEnumerableStandardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/Beneficiary/list/my',
        });
    }

    /**
     * @param id 
     * @returns BeneficiaryViewStandardResponse Success
     * @throws ApiError
     */
    public static deleteBeneficiary(
id: number,
): CancelablePromise<BeneficiaryViewStandardResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/Beneficiary/delete/{id}',
            path: {
                'id': id,
            },
        });
    }

}
