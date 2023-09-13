/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32StandardResponse } from "../models/Int32StandardResponse";
import type { LiquedeSealInput } from "../models/LiquedeSealInput";
import type { LiquiedeGoalInput } from "../models/LiquiedeGoalInput";
import type { SavingPlanTypeIEnumerableStandardResponse } from "../models/SavingPlanTypeIEnumerableStandardResponse";
import type { SavingsViewIEnumerableStandardResponse } from "../models/SavingsViewIEnumerableStandardResponse";
import type { SavingsViewStandardResponse } from "../models/SavingsViewStandardResponse";
import type { SavingsWithdrawalModel } from "../models/SavingsWithdrawalModel";

import type { CancelablePromise } from "Services/core/CancelablePromise";
import { OpenAPI } from "Services/core/OpenAPI";
import { request as __request } from "Services/core/request";

export class SavingsService {
  /**
   * @returns SavingPlanTypeIEnumerableStandardResponse Success
   * @throws ApiError
   */
  public static getSavingPlanTypes(): CancelablePromise<SavingPlanTypeIEnumerableStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Savings/plans/types",
    });
  }

  /**
   * @param requestBody
   * @returns SavingsViewStandardResponse Success
   * @throws ApiError
   */
  public static createLiqiedeSealSavingPlan(
    requestBody?: LiquedeSealInput
  ): CancelablePromise<SavingsViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Savings/plans/liqiede-seal",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param requestBody
   * @returns SavingsViewStandardResponse Success
   * @throws ApiError
   */
  public static createLiqiedeGoalSavingPlan(
    requestBody?: LiquiedeGoalInput
  ): CancelablePromise<SavingsViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Savings/plans/liqiede-goal",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @param planId
   * @param paymentMethod
   * @returns SavingsViewStandardResponse Success
   * @throws ApiError
   */
  public static retryPlanPayment(
    planId: number,
    paymentMethod: string | null
  ): CancelablePromise<SavingsViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Savings/plans/retry-payment/{PlanId}/{PaymentMethod}",
      path: {
        PlanId: planId,
        PaymentMethod: paymentMethod,
      },
    });
  }

  /**
   * @param requestBody
   * @returns SavingsViewStandardResponse Success
   * @throws ApiError
   */
  public static withdrawPrematurely(
    requestBody?: SavingsWithdrawalModel
  ): CancelablePromise<SavingsViewStandardResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/api/Savings/plans/withdraw-prematurely",
      body: requestBody,
      mediaType: "application/json-patch+json",
    });
  }

  /**
   * @returns Int32StandardResponse Success
   * @throws ApiError
   */
  public static getWithdrawalPenaltyPercentage(): CancelablePromise<Int32StandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Savings/withdrawalpenaltypercentage",
    });
  }

  /**
   * @returns SavingsViewIEnumerableStandardResponse Success
   * @throws ApiError
   */
  public static getUserSavings(): CancelablePromise<SavingsViewIEnumerableStandardResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/api/Savings/user",
    });
  }
}
